import { EntityStatus } from "@etsoo/appscript";

/**
 * Order line query data
 * 订单行查询数据
 */
export type OrderLineQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Price
   * 价格
   */
  price: number;

  /**
   * Qty
   * 数量
   */
  qty: number;

  /**
   * Amount
   * 金额
   */
  amount: number;

  /**
   * Start time
   * 开始时间
   */
  startTime?: string | Date;

  /**
   * End time
   * 结束时间
   */
  endTime?: string | Date;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Creation
   * 登记时间
   */
  creation: string | Date;
};
