import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Info kind list component
 * @param props Props
 * @returns Component
 */
export function InfoKindList(props: Omit<SelectExProps<ListType>, "options">) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const { label = crm.app.get("type"), name = "kind", ...rest } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.person.getInfoKinds()}
      {...rest}
    />
  );
}
