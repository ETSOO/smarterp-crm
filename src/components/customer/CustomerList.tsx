import { IdentityTypeFlags } from "@etsoo/appscript";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonList, PersonListProps } from "../person/PersonList";

/**
 * Customer tiplist
 * @param props Props
 * @returns Component
 */
export function CustomerList(props: PersonListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("customer"),
    rq = { identityType: IdentityTypeFlags.Customer, enabled: true },
    ...rest
  } = props;

  return <PersonList label={label} rq={rq} {...rest} />;
}
