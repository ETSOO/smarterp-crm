import { FinanceAccountKind } from "../../dto/financeAccount/FinanceAccountKind";

/**
 * Finance account create bulk request data
 * 批量创建财务账户请求数据
 */
export type FinanceAccountCreateBulkRQ = {
  /**
   * Owner person id
   * 所有人人员编号
   */
  personId?: number;

  /**
   * Kind
   * 类型
   */
  kind: FinanceAccountKind;

  /**
   * Bank
   * 银行
   */
  bank: string;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Account prefix
   * 账号前缀
   */
  prefix: string;

  /**
   * Length
   * 长度
   */
  length: number;

  /**
   * Start number
   * 开始数字
   */
  startNumber: number;

  /**
   * Count
   * 数量
   */
  count: number;

  /**
   * Balance, ignore when equal to 0
   * 余额，等于 0 时忽略
   */
  balance: number;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * Description
   * 描述
   */
  description?: string;
};
