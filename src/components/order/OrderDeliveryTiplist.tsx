import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { OrderDeliveryListData } from "../../dto/orderDelivery/OrderDeliveryListData";
import { OrderDeliveryListRQ } from "../..";

/**
 * Order delivery tiplist properties
 * 订单配送方式提示列表属性
 */
export type OrderDeliveryTiplistProps = Omit<
  TiplistProps<OrderDeliveryListData, "id">,
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
   * Default request data
   */
  rq?: Partial<OrderDeliveryListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: OrderDeliveryListRQ) => OrderDeliveryListRQ;
};

/**
 * Order delivery tiplist
 * 订单配送方式提示列表
 * @param props Properties
 * @returns Component
 */
export function OrderDeliveryTiplist(props: OrderDeliveryTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("orderDeliveries")!,
    maxItems = 10,
    getOptionLabel = (data) => data.title,
    onLoadData = (rq) => rq,
    name = "deliveryId",
    rq,
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<OrderDeliveryListData, "id">
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.orderDeliveryApi.list(
          onLoadData({
            isOrder: true,
            isValid: true,
            ...rq,
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
