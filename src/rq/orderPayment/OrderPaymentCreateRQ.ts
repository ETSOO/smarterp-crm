import { OrderPaymentKind } from "../../dto/orderPayment/OrderPaymentKind";

/**
 * Create order payment request data
 * 创建订单支付方式请求数据
 */
export type OrderPaymentCreateRQ = {
  /**
   * Kind
   * 类型
   */
  kind: OrderPaymentKind;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Is valid
   * 是否有效
   */
  isValid?: boolean;

  /**
   * Order index
   * 排序数
   */
  orderIndex?: number;
};
