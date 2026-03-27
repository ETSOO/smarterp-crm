import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Order payment list component
 * @param props Props
 * @returns Component
 */
export function OrderPaymentList(
  props: Omit<SelectExProps<ListType>, "options">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("orderPayments"),
    name = "payment_id",
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.order.getPayments()}
      {...rest}
    />
  );
}
