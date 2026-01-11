import { useRequiredCrmApp } from "../../CrmApp";
import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { ProductCategoryListData } from "../../dto/productCategory/ProductCategoryListData";
import React from "react";

export function ButtonProductCategories(
  props: Omit<
    ButtonPopupCheckboxProps<ProductCategoryListData>,
    "labelField" | "loadData"
  >
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("clickToChoose", "categories");

  // Destruct
  const {
    inputName = "categories",
    label = labels.categories,
    labelEnd = labels.clickToChoose,
    ...rest
  } = props;

  const loadData = React.useCallback(
    async () =>
      (await crm.productCategoryApi.list(
        { queryPaging: 64 },
        { showLoading: false }
      )) ?? [],
    []
  );

  return (
    <ButtonPopupCheckbox<ProductCategoryListData>
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
