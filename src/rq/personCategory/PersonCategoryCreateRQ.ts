import { IdentityTypeFlags } from "@etsoo/appscript";

/**
 * Person category create request data
 * 人员分类创建请求数据
 */
export type PersonCategoryCreateRQ = {
  /**
   * Identity type
   * 识别类型
   */
  identityType: IdentityTypeFlags;

  /**
   * Parent Id
   * 父级编号
   */
  parentId?: number;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Assigned Id
   * 分配编号
   */
  assignedId?: string;

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
