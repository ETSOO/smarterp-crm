import { QueryRQ } from "@etsoo/appscript";

/**
 * Query products for purchase request data
 * 查询产品用于采购的请求数据
 */
export type QueryForPurchaseRQ = QueryRQ & {
  /**
   * Supplier id
   * 供应商编号
   */
  supplierId: number;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Culture
   * 文化
   */
  culture?: string;

  /**
   * Category
   * 所属分类
   */
  categoryId?: number;

  /**
   * Category and all descendant category ids
   * 所属分类及所有下级子类编号
   */
  categoryIdAll?: number;

  /**
   * Assigned id start
   * 分配的编号开始
   */
  assignedIdStart?: string;
};
