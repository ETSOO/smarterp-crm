import { OrderDeliveryKind } from "../../dto/orderDelivery/OrderDeliveryKind";

/**
 * Create order delivery request data
 * 创建订单配送方式请求数据
 */
export type OrderDeliveryCreateRQ = {
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
   * Is order or not
   * 是否为订单
   */
  isOrder: boolean;

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
