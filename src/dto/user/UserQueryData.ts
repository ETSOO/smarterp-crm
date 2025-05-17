import { EntityStatus, UserRole } from "@etsoo/appscript";

/**
 * User query data
 * 用户查询数据
 */
export type UserQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * User role
   * 用户角色
   */
  userRole?: UserRole;

  /**
   * Departments
   * 所属部门
   */
  depts?: string[];

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Creation
   * 创建时间
   */
  creation: Date | string;
};
