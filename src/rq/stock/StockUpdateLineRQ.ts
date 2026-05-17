/**
 * Stock update line request data
 * 库存更新行请求数据
 */
export type StockUpdateLineRQ = {
  /**
   * Line id
   * 行编号
   */
  id: number;

  /**
   * New qty
   * 新数量
   */
  qty: number;
};
