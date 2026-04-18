/**
 * Complete execution request data
 * 完成执行请求数据
 */
export type OrderLineCompleteRQ = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Asset Id
   * 资产编号
   */
  assetId?: number;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * Cost price
   * 成本价
   */
  costPrice?: number;
};
