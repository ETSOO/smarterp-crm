import { FinanceTransactionPayItem } from "../../dto/financeTransaction/FinanceTransactionPayItem";

/**
 * Pay order request data
 * 订单付款请求数据
 */
export type FinanceTransactionPayOrderRQ = {
  /**
   * Order id
   * 订单编号
   */
  orderId: number;

  /**
   * Amount
   * 金额
   */
  amount: number;

  /**
   * Pay items
   * 付款项目
   */
  items: FinanceTransactionPayItem[];

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Happen date
   * 发生日期
   */
  happenDate?: string | Date;
};
