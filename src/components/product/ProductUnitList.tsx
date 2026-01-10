import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ProductUnitItem } from "../../dto/product/ProductUnitItem";

/**
 * Product unit list component
 * @param props Props
 * @returns Component
 */
export function ProductUnitList(
  props: Omit<SelectExProps<ProductUnitItem>, "options" | "loadData">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("productUnit"),
    labelField = "name",
    name = "unitId",
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      labelField={labelField}
      loadData={() => crm.productApi.queryUnit({ showLoading: false })}
      name={name}
      {...rest}
    />
  );
}
