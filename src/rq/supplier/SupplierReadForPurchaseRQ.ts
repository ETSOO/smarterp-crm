/**
 * Read supplier data for purchase request data
 * 读取采购用的供应商数据请求
 */
export type SupplierReadForPurchaseRQ = {
  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Supplier id, null or 0 for anonymous supplier
   * 供应商编号，null或者0表示匿名供应商
   */
  supplierId?: number;
};
