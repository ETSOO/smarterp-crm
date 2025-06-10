import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType1 } from "@etsoo/shared";

/**
 * Person gender list component
 * @param props Props
 * @returns Component
 */
export function PersonGenderList(
  props: Omit<SelectExProps<ListType1>, "options">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("personGender"),
    name = "gender",
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.person.getGenders()}
      {...rest}
    />
  );
}
