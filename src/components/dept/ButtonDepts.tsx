import { DeptListData } from "../../dto/dept/DeptListData";
import { useRequiredCrmApp } from "../../CrmApp";
import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import React from "react";

export function ButtonDepts(
  props: Omit<ButtonPopupCheckboxProps<DeptListData>, "labelField" | "loadData">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("clickToChoose", "depts");

  // Destruct
  const {
    inputName = "depts",
    label = labels.depts,
    labelEnd = labels.clickToChoose,
    ...rest
  } = props;

  const loadData = React.useCallback(
    async () =>
      (await crm.deptApi.list(
        { queryPaging: 64 },
        { showLoading: false, defaultValue: [] }
      )) ?? [],
    []
  );

  return (
    <ButtonPopupCheckbox<DeptListData>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => `${data.name}`}
      labelEnd={labelEnd}
      labelField="name"
      loadData={loadData}
      {...rest}
    />
  );
}
