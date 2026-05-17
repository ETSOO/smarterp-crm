import { QueryRQ } from "@etsoo/appscript";

/**
 * Stock query line request data
 * 库存行查询请求数据
 */
export type StockQueryLineRQ = QueryRQ & {
  /**
   * Stock id
   * 库存编号
   */
  stockId: number;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * Qty start
   * 开始数量
   */
  qtyStart?: number;
};
