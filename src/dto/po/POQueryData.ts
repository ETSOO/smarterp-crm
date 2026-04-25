import { EntityStatus } from "@etsoo/appscript";

/**
 * Purchase order query data
 * 采购查询数据
 */
export type POQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Source
   * 来源
   */
  source?: string;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId: number;

  /**
   * Supplier name
   * 供应商名称
   */
  supplierName: string;

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
   * Purchase order discount
   * 采购单折扣
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
