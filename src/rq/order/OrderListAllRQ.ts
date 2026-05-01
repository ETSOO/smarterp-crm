import { OrderListRQ } from "./OrderListRQ";

/**
 * Order / PO list request data
 * 订单采购列表请求数据
 */
export type OrderListAllRQ = OrderListRQ & {
  /**
   * Person id, customer for order or supplier for purchase order
   * 人员编号，订单的客户或采购订单的供应商
   */
  personId?: number;
};
