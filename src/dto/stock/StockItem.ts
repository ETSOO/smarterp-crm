/**
 * Stock item
 * 库存项目
 */
export type StockItem = {
  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Qty
   * 数量
   */
  qty: number;
};

/**
 * Order stock item
 * 订单库存项目
 */
export type StockOrderItem = StockItem & {
  /**
   * Order line id
   * 订单行编号
   */
  orderLineId: number;
};
