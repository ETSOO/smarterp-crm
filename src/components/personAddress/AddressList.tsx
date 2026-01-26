import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { AddressListData } from "../../dto/personAddress/AddressListData";
import { AddressListRQ } from "../../rq/personAddress/AddressListRQ";

/**
 * Person address list properties
 * 人员地址提示列表属性
 */
export type AddressListProps = Omit<
  TiplistProps<AddressListData, "id">,
  "loadData" | "label" | "name"
> & {
  /**
   * Label
   */
  label?: string;

  /**
   * Name
   */
  name?: string;

  /**
   * Person id
   */
  personId: number;

  /**
   * Default request data
   */
  rq?: Partial<AddressListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: AddressListRQ) => AddressListRQ;
};

/**
 * Person address list
 * 人员地址提示列表
 * @param props Properties
 * @returns Component
 */
export function AddressList(props: AddressListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("address")!,
    maxItems = 10,
    getOptionLabel = crm.personAddress.getListLabel(),
    onLoadData = (rq) => rq,
    name = "addressId",
    personId,
    rq = {},
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<AddressListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.personAddressApi.list(
          onLoadData({
            ...rq,
            personId,
            keyword,
            id,
            queryPaging: {
              batchSize: maxItems
            }
          }),
          { showLoading: false, defaultValue: [] }
        )
      }
      {...rest}
    />
  );
}
