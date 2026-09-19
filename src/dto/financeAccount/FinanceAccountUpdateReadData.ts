import { EntityStatus } from "@etsoo/appscript";
import { FinanceAccountKind } from "./FinanceAccountKind";

export type FinanceAccountUpdateReadData = {
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
   * SWIFT data
   * SWIFT 数据
   */
  swift?: string;

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
