import { OrderPaymentKind } from "./OrderPaymentKind";

/**
 * Order payment query data
 * 订单支付方式查询数据
 */
export type OrderPaymentQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

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
  isValid: boolean;
};
