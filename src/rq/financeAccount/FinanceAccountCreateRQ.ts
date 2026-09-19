import { EntityStatus } from "@etsoo/appscript";
import { FinanceAccountKind } from "../../dto/financeAccount/FinanceAccountKind";
/**
 * Finance account create request data
 * 财务账户创建请求数据
 */
export type FinanceAccountCreateRQ = {
  /**
   * Owern person Id
   * 所有人人员编号
   */
  personId: number;

  /**
   * Kind
   * 类型
   */
  kind: FinanceAccountKind;

  /**
   * Bank name
   * 银行名称
   */
  bank: string;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Account number
   * 账号
   */
  accountNumber: string;

  /**
   * SWIFT data
   * SWIFT 数据
   */
  swift?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Status
   * 状态
   */
  status?: EntityStatus;

  /**
   * Expiry
   * 过期时间
   */
  expiry?: Date | string;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;
};
