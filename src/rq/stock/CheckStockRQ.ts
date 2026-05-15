import { StockItem } from "../../dto/stock/StockItem";

/**
 * Check stock request data
 * 检查库存请求数据
 */
export type CheckStockRQ = {
  /**
   * Location id
   * 位置编号
   */
  locationId: number;

  /**
   * Items
   * 类型
   */
  items: StockItem[];
};
