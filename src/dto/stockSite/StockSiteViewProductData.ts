/**
 * Stock site view product data
 * 库存点浏览产品数据
 */
export type StockSiteViewProductData = {
  /**
   * 编号
   */
  id: number;

  /**
   * Location id
   * 位置编号
   */
  locationId?: number;

  /**
   * Location name
   * 位置名称
   */
  locationName?: string;

  /**
   * Qty.
   * 数量
   */
  qty: number;

  /**
   * Last refresh time
   * 上次刷新时间
   */
  refreshTime: Date | string;
};
