/**
 * Stock site query data
 * 库存点查询数据
 */
export type StockSiteQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Product name
   * 产品名称
   */
  productName: string;

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
