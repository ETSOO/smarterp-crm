import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * Asset list request data
 * 资产列表请求数据
 */
export type AssetListRQ = StatusQueryRQ & {
  /**
   * Person (owner) id
   * 所有者编号
   */
  personId?: number;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * Serial number
   * 序列号
   */
  sn?: string;
};
