import { OrderLineListRQ } from "./OrderLineListRQ";

/**
 * Order line query request data
 * 订单行查询请求数据
 */
export type OrderLineQueryRQ = OrderLineListRQ & {
  /**
   * Qty start
   * 开始数量
   */
  qtyStart?: number;
};
