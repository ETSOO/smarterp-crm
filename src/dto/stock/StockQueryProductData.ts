/**
 * Stock query product data
 * 库存查询产品数据
 */
export type StockQueryProductData = {
  /**
   * Id
   * 编号
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
   * Purchase minimum unit
   * 购买最小单位
   */
  stepQty?: number;

  /**
   * Stock qty
   * 库存数量
   */
  qty?: number;

  /**
   * Unit name
   * 单位名称
   */
  unitName: string;
};
