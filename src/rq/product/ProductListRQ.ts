import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * Product list request data
 * 产品列表请求数据
 */
export type ProductListRQ = StatusQueryRQ & {
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
   * Category and all descendant category ids
   * 所属分类及所有下级子类编号
   */
  categoryIdAll?: number;

  /**
   * Categories
   * 所属多个分类
   */
  categoryIds?: number[];

  /**
   * Name
   * 名称
   */
  name?: string;

  /**
   * Assigned id start
   * 分配的编号开始
   */
  assignedIdStart?: string;
};
