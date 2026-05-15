import { StockOrderItem } from "../../dto/stock/StockItem";

/**
 * Stock order delivering
 * 库存订单发货
 */
export type StockOrderOutRQ = {
  /**
   * Customer id
   * 客户编号
   */
  customerId: number;

  /**
   * Shipping address id
   * 发货地址编号
   */
  locationFromId: number;

  /**
   * Receiving address id
   * 收货地址编号
   */
  locationToId: number;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Tracking number
   * 物流编号
   */
  trackingNumber?: string;

  /**
   * Orders
   * 订单
   */
  orders: number[];

  /**
   * Items
   * 项目
   */
  items: StockOrderItem[];
};
