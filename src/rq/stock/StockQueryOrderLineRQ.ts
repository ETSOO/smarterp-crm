/**
 * Query order line stock request data
 * 查询订单行库存请求数据
 */
export type StockQueryOrderLineRQ = {
  /**
   * Customer or supplier id
   * 客户或供应商编号
   */
  personId: number;

  /**
   * Org's location id
   * 机构位置编号
   */
  locationId: number;

  /**
   * Exclude order line ids
   * 排除订单行编号
   */
  excludeLineIds?: number[];

  /**
   * Order ids
   * 订单编号
   */
  orders: number[];
};
