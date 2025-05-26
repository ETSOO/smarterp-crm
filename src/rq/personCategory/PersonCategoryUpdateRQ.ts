import { IdentityTypeFlags } from "@etsoo/appscript";

/**
 * Person category update request data
 * 人员分类更新请求数据
 */
export type PersonCategoryUpdateRQ = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Identity type
   * 识别类型
   */
  identityType?: IdentityTypeFlags;

  /**
   * Parent Id
   * 父级编号
   */
  parentId?: number;

  /**
   * Name
   * 名称
   */
  name?: string;

  /**
   * Order index
   * 排序索引
   */
  orderIndex?: number;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;
};
