/**
 * Finance transaction transfer request data
 * 财务交易转账请求数据
 */
export type FinanceTransactionTransferRQ = {
  /**
   * Source account id
   * 转出账户编号
   */
  sourceAccountId: number;

  /**
   * Destination account id
   * 转入账户编号
   */
  destinationAccountId: number;

  /**
   * Amount
   * 金额
   */
  amount: number;

  /**
   * Description
   * 描述
   */
  description: string;

  /**
   * Reference id
   * 参考编号
   */
  referenceId?: string;
};
