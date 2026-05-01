import { POLineListRQ } from "./POLineListRQ";

/**
 * PO line query all request data
 * 查询所有采购行请求数据
 */
export type POLineQueryAllRQ = POLineListRQ & {
  /**
   * User id
   * 用户编号
   */
  userId?: number;

  /**
   * Source
   * 来源
   */
  source?: string;

  /**
   * Qty start
   * 开始数据
   */
  qtyStart?: number;

  /**
   * Creation start
   * 创建开始
   */
  creationStart?: Date | string;

  /**
   * Creation end
   * 创建结束
   */
  creationEnd?: Date | string;

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
