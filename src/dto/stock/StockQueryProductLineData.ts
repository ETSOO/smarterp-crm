/**
 * Stock query product line data
 * 库存查询产品行数据
 */
export type StockQueryProductLineData = {
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
   * Stock title
   * 库存标题
   */
  title: string;

  /**
   * Location id
   * 位置编号
   */
  locationId: number;

  /**
   * Location name
   * 位置名称
   */
  locationName: string;

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

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;
};
