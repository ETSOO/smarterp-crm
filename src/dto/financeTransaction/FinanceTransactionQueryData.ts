import { FinanceTransactionKind } from "./FinanceTransactionKind";

export type FinanceTransactionQueryData = {
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
   * Reference id
   * 参考编号
   */
  referenceId?: string;

  /**
   * Order id related
   * 关联的订单/采购编号
   */
  orderId?: number;

  /**
   * Target account id
   * 目标账户编号
   */
  targetAccountId?: number;

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

  /**
   * Author name
   * 作者姓名
   */
  authorName: string;
};
