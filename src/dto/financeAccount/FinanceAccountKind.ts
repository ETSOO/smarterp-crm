/**
 * Finance account kind
 * 财务账户类型
 */
export enum FinanceAccountKind {
  /**
   * None
   * 无
   */
  None = 0,

  /**
   * Cash account
   * 现金账户
   */
  Cash = 1,

  /**
   * Transfer account
   * 转账账户
   */
  Transfer = 2,

  /**
   * Cash and transfer account
   * 现金和转账账户
   */
  CashAndTransfer = 3,

  /**
   * Prepaid
   * 储值卡
   */
  Prepaid = 11,

  /**
   * Pass
   * 次卡
   */
  Pass = 12
}
