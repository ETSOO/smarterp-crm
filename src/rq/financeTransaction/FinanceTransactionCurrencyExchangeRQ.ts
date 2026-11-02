/**
 * Finance transaction currency exchange request data
 * 财务交易货币兑换请求数据
 */
export type FinanceTransactionCurrencyExchangeRQ = {
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
   * Exchange currency
   * 兑换货币
   */
  currency: string;

  /**
   * Exchange rate
   * 汇率
   */
  exchangeRate: number;

  /**
   * Exchange amount
   * 兑换金额
   */
  exchangeAmount: number;

  /**
   * Exchange fee, charged by source currency
   * 兑换手续费，按源币种收取
   */
  exchangeFee: number;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Reference id
   * 参考编号
   */
  referenceId?: string;
};
