import { OrderLineListRQ } from "./OrderLineListRQ";

/**
 * Order line query all request data
 * 查询所有订单行请求数据
 */
export type OrderLineQueryAllRQ = OrderLineListRQ & {
  /**
   * Customer id
   * 客户编号
   */
  customerId?: number;

  /**
   * Qty start
   * 开始数据
   */
  qtyStart?: number;

  /**
   * Start time start
   * 开始时间开始
   */
  startTimeStart?: Date | string;

  /**
   * Start time end
   * 开始时间结束
   */
  startTimeEnd?: Date | string;
};
