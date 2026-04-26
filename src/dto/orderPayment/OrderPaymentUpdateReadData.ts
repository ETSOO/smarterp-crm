import { OrderPaymentKind } from "./OrderPaymentKind";

/**
 * Order payment update read data
 * 更新订单支付方式读取数据
 */
export type OrderPaymentUpdateReadData = {
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
   * Is order or not
   * 是否为订单
   */
  isOrder: boolean;

  /**
   * Is valid
   * 是否有效
   */
  isValid: boolean;

  /**
   * Order index
   * 排序数
   */
  orderIndex: number;
};
