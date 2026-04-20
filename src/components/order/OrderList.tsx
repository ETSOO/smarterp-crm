import { OrderListRQ } from "../../rq/order/OrderListRQ";
import { OrderAllList, OrderAllListProps } from "./OrderAllList";

type LocalOrderListRQ = Omit<OrderListRQ, "isOrder">;

/**
 * Order list properties
 * 订单提示列表属性
 */
export type OrderListProps = Omit<OrderAllListProps, "onLoadData"> & {
  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: LocalOrderListRQ) => LocalOrderListRQ;
};

/**
 * Order list
 * 订单提示列表
 * @param props Properties
 * @returns Component
 */
export function OrderList(props: OrderListProps) {
  // Destruct
  const { rq, ...rest } = props;

  // Layout
  return <OrderAllList {...rest} rq={{ ...rq, isOrder: true }} />;
}
