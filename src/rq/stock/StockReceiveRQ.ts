/**
 * Stock receive request data
 * 入库请求数据
 */
export type StockReceiveRQ = {
  /**
   * Stock id
   * 库存编号
   */
  id: number;

  /**
   * Tracking number
   * 物流编号
   */
  trackingNumber?: string;
};
