/**
 * Query order line item data
 * 查询订单行项目数据
 */
export type StockQueryOrderLineItemData = {
  /**
   * Order line Id
   * 订单行编号
   */
  id: number;

  /**
   * Order id
   * 订单编号
   */
  orderId: number;

  /**
   * Qty
   * 数量
   */
  qty: number;

  /**
   * Pending qty
   * 待处理数量
   */
  pendingQty: number;
};

/**
 * Query order line stock data
 * 查询订单行库存数据
 */
export type StockQueryOrderLineData = {
  /**
   * Product id
   * 产品编号
   */
  id: number;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Unit name
   * 产品单位
   */
  unitName: string;

  /**
   * Purchase minimum unit
   * 购买最小单位
   */
  stepQty?: number;

  /**
   * Stock qty
   * 库存数量
   */
  stockQty: number;

  /**
   * Order qty
   * 订单数量
   */
  orderQty: number;

  /**
   * Pending qty
   * 待处理数量
   */
  pendingQty: number;

  /**
   * Order line items
   * 订单行项目
   */
  lines: StockQueryOrderLineItemData[];
};
