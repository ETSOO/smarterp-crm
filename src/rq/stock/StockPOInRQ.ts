import { StockOrderItem } from "../../dto/stock/StockItem";

/**
 * Stock PO receiving
 * 库存采购入库
 */
export type StockPOInRQ = {
  /**
   * Supplier id
   * 供应商编号
   */
  supplierId: number;

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
   * POs
   * 采购
   */
  pos: number[];

  /**
   * Items
   * 项目
   */
  items: StockOrderItem[];
};
