import { IdentityTypeFlags } from "@etsoo/appscript";

/**
 * Person category query data
 * 人员分类查询数据
 */
export type PersonCategoryQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

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
   * Creation
   * 登记时间
   */
  creation: string | Date;
};
