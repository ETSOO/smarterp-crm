import { EntityStatus } from "@etsoo/appscript";

/**
 * Order line all query data
 * 订单行全部查询数据
 */
export type OrderLineQueryAllData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Customer
   * 客户
   */
  customer: string;

  /**
   * Customer id
   * 客户编号
   */
  customerId: number;

  /**
   * Order id
   * 订单编号
   */
  orderId: number;

  /**
   * Product id
   * 产品编号
   */
  productId: number;

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
