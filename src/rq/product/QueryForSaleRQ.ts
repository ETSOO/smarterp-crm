import { QueryRQ } from "@etsoo/appscript";

/**
 * Query products for sale request data
 * 查询产品用于销售的请求数据
 */
export type QueryForSaleRQ = QueryRQ & {
  /**
   * Customer id
   * 客户编号
   */
  customerId?: number;

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
