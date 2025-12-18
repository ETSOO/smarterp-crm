import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * Supplier list request data
 * 供应商列表请求数据
 */
export type SupplierListRQ = StatusQueryRQ & {
  /**
   * Tag
   * 标签
   */
  tag?: string;

  /**
   * Tag ID
   * 标签编号
   */
  tagId?: number;

  /**
   * Category
   * 所属分类
   */
  categoryId?: number;

  /**
   * category and all descendant category ids
   * 所属分类及所有下级子类编号
   */
  categoryIdAll?: number;

  /**
   * Categories
   * 所属多个分类
   */
  categoryIds?: number[];

  /**
   * City
   * 所在城市
   */
  city?: string;
};
