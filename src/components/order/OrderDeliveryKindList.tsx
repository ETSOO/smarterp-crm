import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Order delivery kind list component
 * @param props Props
 * @returns Component
 */
export function OrderDeliveryKindList(
  props: Omit<SelectExProps<ListType>, "options">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("type"),
    name = "kind",
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.order.getDeliveryKinds()}
      fullWidth={fullWidth}
      {...rest}
    />
  );
}
