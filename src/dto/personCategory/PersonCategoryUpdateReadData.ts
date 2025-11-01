import { IdentityTypeFlags } from "@etsoo/appscript";

/**
 * Person category update read data
 * 人员分类更新读取数据
 */
export type PersonCategoryUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

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
   * Names
   * 名称列表
   */
  names: string[];

  /**
   * Identity Type
   * 识别类型
   */
  identityType: IdentityTypeFlags;

  /**
   * Assigned Id
   * 分配编号
   */
  assignedId?: string;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;
};
