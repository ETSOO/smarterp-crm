import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Stock kind list component
 * @param props Props
 * @returns Component
 */
export function StockKindList(props: Omit<SelectExProps<ListType>, "options">) {
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
      options={crm.stock.getKinds()}
      fullWidth={fullWidth}
      {...rest}
    />
  );
}
