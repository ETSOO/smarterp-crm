import { OrderDeliveryKind } from "./OrderDeliveryKind";

/**
 * Order delivery update read data
 * 更新订单配送方式读取数据
 */
export type OrderDeliveryUpdateReadData = {
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

  /**
   * Order index
   * 排序数
   */
  orderIndex: number;
};
