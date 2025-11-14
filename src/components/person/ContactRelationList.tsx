import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Props for ContactRelationList component
 */
export type ContactRelationListProps = Omit<
  SelectExProps<ListType>,
  "options"
> & {
  /**
   * Is legal person
   * 是否为法人
   */
  isLegalPerson?: boolean | null;
};

/**
 * Contact relation list component
 * @param props Props
 * @returns Component
 */
export function ContactRelationList(props: ContactRelationListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("relation"),
    name = "relationType",
    isLegalPerson,
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.person.getRelationTypes(isLegalPerson)}
      {...rest}
    />
  );
}
