import { FinanceTransactionPayItem } from "../../dto/financeTransaction/FinanceTransactionPayItem";

/**
 * Finance transaction reimburse request data
 * 财务交易报销请求数据
 */
export type FinanceTransactionReimburseRQ = {
  /**
   * Reimbursement person id
   * 报销人人员编号
   */
  targetPersonId: number;

  /**
   * Reimbursement person account id
   * 报销人账户
   */
  targetAccountId?: number;

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
   * Reference id
   * 参考编号
   */
  referenceId?: string;

  /**
   * Description
   * 描述
   */
  description: string;

  /**
   * Order / PO id
   * 订单或采购订单编号
   */
  orderId?: number;
};
