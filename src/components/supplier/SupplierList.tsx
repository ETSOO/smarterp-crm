import { IdentityTypeFlags } from "@etsoo/appscript";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonList, PersonListProps } from "../person/PersonList";

/**
 * Supplier tiplist
 * @param props Props
 * @returns Component
 */
export function SupplierList(props: PersonListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("supplier"),
    rq = { identityType: IdentityTypeFlags.Supplier, enabled: true },
    ...rest
  } = props;

  return <PersonList label={label} rq={rq} {...rest} />;
}
