import { EntityStatus } from "@etsoo/appscript";

/**
 * Purchase line query data
 * 采购行查询数据
 */
export type POLineQueryData = {
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
   * Discount
   * 折扣
   */
  discount: number;

  /**
   * Start time
   * 开始时间
   */
  startTime?: Date | string;

  /**
   * End time
   * 结束时间
   */
  endTime?: Date | string;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;
};
