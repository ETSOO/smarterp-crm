/**
 * Create stock line request data
 * 创建库存行请求数据
 */
export type StockCreateLineRQ = {
  /**
   * Stock id
   * 库存编号
   */
  stockId: number;

  /**
   * Qty
   * 数量
   */
  qty: number;

  /**
   * Order / PO line id
   * 订单/采购行编号
   */
  orderLineId: number;
};
