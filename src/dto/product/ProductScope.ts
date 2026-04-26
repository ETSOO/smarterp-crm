/**
 * Product sale / purchase control scope
 * 产品销售/采购控制范围
 */
export enum ProductScope {
  /**
   * None
   * 无
   */
  None = 0,

  /**
   * Internal sale
   * 内部销售
   */
  InternalSale = 1,

  /**
   * Public sale
   * 公开销售
   */
  PublicSale = 2,

  /**
   * Purchase
   * 采购
   */
  Purchase = 4,

  /**
   * Production
   * 生产
   */
  Production = 32,

  /**
   * Inventory
   * 库存管理
   */
  Inventory = 64
}
