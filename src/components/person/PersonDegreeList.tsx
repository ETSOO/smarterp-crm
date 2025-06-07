import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Person education degree list component
 * @param props Props
 * @returns Component
 */
export function PersonDegreeList(
  props: Omit<SelectExProps<ListType>, "options">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("personDegree"),
    name = "degree",
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.person.getDegrees()}
      {...rest}
    />
  );
}
