import { QueryRQ, EntityStatus } from "@etsoo/appscript";

/**
 * Purchase line list request data
 * 采购行列表请求数据
 */
export type POLineListRQ = QueryRQ & {
  /**
   * Purchase order id
   * 采购订单编号
   */
  poId?: number;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * Asset id
   * 资产编号
   */
  assetId?: number;
};
