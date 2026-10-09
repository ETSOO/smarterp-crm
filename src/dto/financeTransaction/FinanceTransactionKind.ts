/**
 * Finance transaction kind
 * 财务交易类型
 */
export enum FinanceTransactionKind {
  /**
   * Collect
   * 收款
   */
  Collect = 1,

  /**
   * Payment
   * 付款
   */
  Payment = 2,

  /**
   * Transfer
   * 转账
   */
  Transfer = 3,

  /**
   * Settlement
   * 月结
   */
  Settlement = 9,

  /**
   * Adjustment
   * 手工调整
   */
  Adjustment = 77,

  /**
   * Init
   * 初始化
   */
  Init = 99
}
