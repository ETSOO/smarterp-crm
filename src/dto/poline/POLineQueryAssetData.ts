import { EntityStatus } from "@etsoo/appscript";

/**
 * PO line asset query data
 * 采购行资产查询数据
 */
export type POLineQueryAssetData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Cost price
   * 成本价
   */
  costPrice: number;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * Supplier name
   * 供应商名称
   */
  supplierName?: string;

  /**
   * Price
   * 价格
   */
  price: number;

  /**
   * Qty
   * 数量
   */
  qty: number;

  /**
   * Asset qty
   * 资产数量
   */
  assetQty: number;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;
};
