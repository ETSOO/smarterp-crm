import { EntityStatus } from "@etsoo/appscript";
import { FinanceAccountKind } from "./FinanceAccountKind";

/**
 * Finance account query data
 * 财务账户查询数据
 */
export type FinanceAccountQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Owern person Id
   * 所有人人员编号
   */
  personId: number;

  /**
   * Owner person name
   * 所有者名称
   */
  personName: string;

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
   * Description
   * 描述
   */
  description?: string;

  /**
   * Times
   * 次数
   */
  times?: number;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Expiry
   * 过期时间
   */
  expiry: Date | string;
};
