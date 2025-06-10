import { useRequiredCrmApp } from "../../CrmApp";
import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { PersonCategoryListData } from "../../dto/personCategory/PersonCategoryListData";
import { IdentityTypeFlags } from "@etsoo/appscript";
import React from "react";

type ButtonPersonCategoriesProps = Omit<
  ButtonPopupCheckboxProps<PersonCategoryListData>,
  "labelField" | "loadData"
> & {
  /**
   * Identity type
   * 识别类型
   */
  identityType?: IdentityTypeFlags;
};

export function ButtonPersonCategories(props: ButtonPersonCategoriesProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("clickToChoose", "categories");

  // Destruct
  const {
    inputName = "categories",
    identityType,
    label = labels.categories,
    labelEnd = labels.clickToChoose,
    ...rest
  } = props;

  const loadData = React.useCallback(
    async () =>
      (await crm.personCategoryApi.list(
        { identityType, queryPaging: 64 },
        { showLoading: false }
      )) ?? [],
    [identityType]
  );

  return (
    <ButtonPopupCheckbox<PersonCategoryListData>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => data.name}
      labelEnd={labelEnd}
      labelField="name"
      loadData={loadData}
      {...rest}
    />
  );
}
