import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Person education list component
 * @param props Props
 * @returns Component
 */
export function PersonEducationList(
  props: Omit<SelectExProps<ListType>, "options">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("personEducation"),
    name = "education",
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.person.getEducations()}
      {...rest}
    />
  );
}
