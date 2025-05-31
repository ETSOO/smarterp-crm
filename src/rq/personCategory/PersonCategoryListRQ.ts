import { IdentityTypeFlags, QueryRQ } from "@etsoo/appscript";

/**
 * Person category list request data
 * 人员分类列表请求数据
 */
export type PersonCategoryListRQ = QueryRQ & {
  /**
   * Identity type
   * 识别类型
   */
  identityType?: IdentityTypeFlags;

  /**
   * Parent category ID
   * 父级分类编号
   */
  parentId?: number;
};
