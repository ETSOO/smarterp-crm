import { OrderDeliveryKind } from "./OrderDeliveryKind";

/**
 * Order delivery query data
 * 订单配送方式查询数据
 */
export type OrderDeliveryQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
   */
  kind: OrderDeliveryKind;

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
