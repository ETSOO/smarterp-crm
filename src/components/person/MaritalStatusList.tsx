import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Person marital status list component
 * @param props Props
 * @returns Component
 */
export function MaritalStatusList(
  props: Omit<SelectExProps<ListType>, "options">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("personMaritalStatus"),
    name = "maritalStatus",
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.person.getMaritalStatuses()}
      {...rest}
    />
  );
}
