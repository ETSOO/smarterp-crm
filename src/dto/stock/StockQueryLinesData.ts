/**
 * Stock query lines data
 * 库存行查询数据
 */
export type StockQueryLinesData = {
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
   * Order / PO line id
   * 订单 / 采购行编号
   */
  orderLineId?: number;
};
