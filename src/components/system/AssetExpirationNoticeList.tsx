import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

/**
 * Asset expiration notice list component
 * @param props Props
 * @returns Component
 */
export function AssetExpirationNoticeList(
  props: Omit<SelectExProps<ListType>, "options">
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("assetExpirationNotice"),
    name = "assetExpirationNotice",
    ...rest
  } = props;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={crm.system.getAssetExpirationNotices()}
      {...rest}
    />
  );
}
