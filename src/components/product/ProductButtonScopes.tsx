import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { ListType } from "@etsoo/shared";
import React from "react";
import { useRequiredCrmApp } from "../../CrmApp";
import { ProductScope } from "../../dto/product/ProductScope";

export type ProductButtonScopesProps = Omit<
  ButtonPopupCheckboxProps<ListType>,
  "labelField" | "loadData" | "value" | "onValueChange"
> & {
  /**
   * Value
   * 值
   */
  value?: ProductScope;

  /**
   * Value change handler
   * @param value New value
   */
  onValueChange: (value: ProductScope) => void;
};

export function ProductButtonScopes(props: ProductButtonScopesProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("clickToChoose", "productScope");

  // Destruct
  const {
    inputName = "scope",
    label = labels.productScope,
    labelEnd = labels.clickToChoose,
    onValueChange,
    value,
    ...rest
  } = props;

  // Scopes
  const scopes = React.useMemo(() => crm.product.getScopes(), []);

  const ids: number[] = [];
  if (value != null) {
    // Convert to ids
    for (const scope of scopes) {
      if ((value & scope.id) === scope.id) {
        ids.push(scope.id);
      }
    }
  }

  return (
    <ButtonPopupCheckbox<ListType>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => data.label}
      labelEnd={labelEnd}
      labelField="label"
      loadData={scopes}
      value={ids}
      onValueChange={(ids) => {
        let newValue = ProductScope.None;
        for (const id of ids) {
          newValue |= id;
        }
        onValueChange(newValue);
      }}
      {...rest}
    />
  );
}
