import { FinanceTransactionPayItem } from "../../dto/financeTransaction/FinanceTransactionPayItem";

/**
 * Pay PO request data
 * 采购订单付款请求数据
 */
export type FinanceTransactionPayPORQ = {
  /**
   * PO id
   * 采购订单编号
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
};
