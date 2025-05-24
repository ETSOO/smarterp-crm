import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { GroupListData } from "../../dto/group/GroupListData";

export function ButtonGroups(
  props: Omit<
    ButtonPopupCheckboxProps<GroupListData>,
    "labelField" | "loadData"
  >
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("clickToChoose", "permissionGroups");

  // Destruct
  const {
    inputName = "groups",
    label = labels.permissionGroups,
    labelEnd = labels.clickToChoose,
    ...rest
  } = props;

  return (
    <ButtonPopupCheckbox<GroupListData>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => `${data.name}`}
      labelEnd={labelEnd}
      labelField="name"
      loadData={async (ids) => {
        const data = await crm.groupApi.query({});
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
