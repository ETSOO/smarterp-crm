import { StockItem } from "../../dto/stock/StockItem";

/**
 * Stock transfer request data
 * 库存调货请求数据
 */
export type StockTransferRQ = {
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
   * Items
   * 项目
   */
  items: StockItem[];
};
