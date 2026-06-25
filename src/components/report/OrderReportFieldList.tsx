import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType1 } from "@etsoo/shared";

/**
 * Order report field list component
 * @param props Props
 * @returns Component
 */
export function OrderReportFieldList(
  props: Omit<SelectExProps<ListType1>, "options">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("field"),
    name = "field",
    ...rest
  } = props;

  const fields: ListType1[] = [
    "orderAmount",
    "customerCount",
    "orderCount"
  ].map((f) => ({
    id: f,
    label: crm.app.get(f) ?? f
  }));

  // Layout
  return (
    <SelectEx<ListType1>
      label={label}
      name={name}
      options={fields}
      fullWidth={fullWidth}
      {...rest}
    />
  );
}
