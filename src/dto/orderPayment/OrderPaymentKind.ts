/**
 * Order payment kind
 * 订单支付方式类型
 */
export enum OrderPaymentKind {
  /**
   * Cash
   * 现金
   */
  Cash = 1,

  /**
   * Credit card
   * 信用卡
   */
  CreditCard = 2,

  /**
   * Bank transfer
   * 银行转账
   */
  BankTransfer = 3,

  /**
   * Check
   * 支票
   */
  Check = 4,

  /**
   * Alipay
   * 支付宝
   */
  Alipay = 10,

  /**
   * WeChat Pay
   * 微信支付
   */
  WeChatPay = 11,

  /**
   * Paypal
   * 贝宝
   */
  Paypal = 12,

  /**
   * Stripe
   */
  Stripe = 15,

  /**
   * Other
   * 其他
   */
  Other = 255
}
