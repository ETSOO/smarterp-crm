import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { DeptListData } from "../../dto/dept/DeptListData";
import { useRequiredCrmApp } from "../../CrmApp";

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

  return (
    <ButtonPopupCheckbox<DeptListData>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => `${data.name}`}
      labelEnd={labelEnd}
      labelField="name"
      loadData={async (ids) => {
        const data = await crm.deptApi.query({});
        if (ids != null && data != null) {
          // Sort data based on the order of ids
          return data.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
        }
        return data ?? [];
      }}
      {...rest}
    />
  );
}
