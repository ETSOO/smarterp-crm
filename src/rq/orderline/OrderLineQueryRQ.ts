import { OrderLineListRQ } from "./OrderLineListRQ";

/**
 * Order line query request data
 * 订单行查询请求数据
 */
export type OrderLineQueryRQ = OrderLineListRQ & {
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
