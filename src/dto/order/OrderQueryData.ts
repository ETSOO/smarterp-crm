import { EntityStatus } from "@etsoo/appscript";

/**
 * Order query data
 * 订单查询数据
 */
export type OrderQueryData = {
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
   * Customer name
   * 客户名称
   */
  customerName: string;

  /**
   * Lines
   * 行数
   */
  lines: number;

  /**
   * Items
   * 项目数
   */
  items: number;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Amount
   * 金额
   */
  amount: number;

  /**
   * Order discount
   * 订单折扣
   */
  discount: number;

  /**
   * Product line discount
   * 单品折扣
   */
  lineDiscount: number;

  /**
   * Approved discount
   * 授权折扣
   */
  approvedDiscount: number;

  /**
   * Tax amount
   * 税额
   */
  taxAmount: number;

  /**
   * Status
   * 状况
   */
  status: EntityStatus;

  /**
   * Start date
   * 开始日期
   */
  startDate?: Date | string;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;
};
