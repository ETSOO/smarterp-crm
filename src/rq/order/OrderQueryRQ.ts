import { OrderListRQ } from "./OrderListRQ";

/**
 * Order query request data
 * 订单查询请求数据
 */
export type OrderQueryRQ = OrderListRQ & {
  /**
   * Source id
   * 来源编号
   */
  sourceId?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Has promotion or not
   * 是否有促销活动
   */
  hasPromotion?: boolean;

  /**
   * Creation start
   * 创建开始时间
   */
  creationStart?: Date | string;

  /**
   * Creation end
   * 创建结束时间
   */
  creationEnd?: Date | string;

  /**
   * Start date start
   * 开始时间开始
   */
  startDateStart?: Date | string;

  /**
   * Start date end
   * 开始时间结束
   */
  startDateEnd?: Date | string;

  /**
   * Amount start
   * 金额起始
   */
  amountStart?: number;

  /**
   * Amount end
   * 金额结束
   */
  amountEnd?: number;
};
