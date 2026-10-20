import { FinanceAccountKind } from "./FinanceAccountKind";

/**
 * Finance account item
 * 财务账号项目
 */
export type FinanceAccountItem = {
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
   * Account number
   * 账号
   */
  accountNumber: string;

  /**
   * Product ID
   * 产品编号
   */
  productId?: number;
};

/**
 * Finance account item
 * 财务账号项目
 */
export type FinanceAccountItemWithBalance = FinanceAccountItem & {
  /**
   * Balance
   * 余额
   */
  balance: number;
};
