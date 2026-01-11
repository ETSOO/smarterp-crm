import { QueryRQ } from "@etsoo/appscript";

/**
 * Product category list request data
 * 产品分类列表请求数据
 */
export type ProductCategoryListRQ = QueryRQ & {
  /**
   * Parent category ID
   * 父级分类编号
   */
  parentId?: number;

  /**
   * Parent and all descendant category ids
   * 父级及所有下级子类编号
   */
  parentIdAll?: number;

  /**
   * Assigned ID
   * 分配编号
   */
  assignedId?: string;
};
