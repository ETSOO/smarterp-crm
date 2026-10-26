import { FinanceTransactionKind } from "./FinanceTransactionKind";

export type FinanceTransactionListData = {
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

  /**
   * Happen date
   * 发生日期
   */
  happenDate?: Date | string;
};
