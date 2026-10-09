import { FinanceTransactionKind } from "./FinanceTransactionKind";

/**
 * Finance transaction item
 * 财务交易项
 */
export type FinanceTransactionItem = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
   */
  kind: FinanceTransactionKind;

  /**
   * Title
   * 主题
   */
  title: string;

  /**
   * Amount
   * 金额
   */
  amount: number;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;
};
