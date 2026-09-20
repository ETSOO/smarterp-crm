/**
 * Finance transaction adjustment request data
 * 财务交易调整请求数据
 */
export type FinanceTransactionAdjustRQ = {
  /**
   * Account id
   * 账户编号
   */
  accountId: number;

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
};
