import { StockKind } from "./StockKind";

/**
 * Stock line view data
 * 库存行浏览数据
 */
export type StockLineViewData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Stock id
   * 库存编号
   */
  stockId: number;

  /**
   * Stock kind
   * 库存类型
   */
  stockKind: StockKind;

  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Purchase minimum unit
   * 购买最小单位
   */
  stepQty?: number;

  /**
   * Order / PO line id
   * 订单 / 采购行编号
   */
  orderLineId?: number;

  /**
   * Qty.
   * 数量
   */
  qty: number;

  /**
   * Order qty
   * 订单数量
   */
  orderQty?: number;

  /**
   * Pending qty
   * 待交付数量
   */
  pendingQty?: number;

  /**
   * Stock qty
   * 库存数量
   */
  stockQty: number;
};
