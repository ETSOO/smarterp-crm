/**
 * Stock kind
 * 库存类型
 */
export enum StockKind {
  /**
   * Order fulfillment
   * 订单发货
   */
  Order = 1,

  /**
   * Purchase receipt
   * 采购入库
   */
  PO = 10,

  /**
   * Stock transfer
   * 调货
   */
  StockTransfer = 50,

  /**
   * Stock taking
   * 盘库
   */
  StockTaking = 80,

  /**
   * Quick assembly
   * 快速组装
   */
  Assembly = 100,

  /**
   * Production
   * 生产
   */
  Production = 120,

  /**
   * Loss reporting
   * 报损
   */
  Loss = 150,

  /**
   * Init
   * 初始化
   */
  Init = 180
}
