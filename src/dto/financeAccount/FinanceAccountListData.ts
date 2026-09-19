import { FinanceAccountKind } from "./FinanceAccountKind";

/**
 * Finance account list data
 * 财务账户列表数据
 */
export type FinanceAccountListData = {
  /**
   * Id
   * 编号
   */
  id: number;

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
};
