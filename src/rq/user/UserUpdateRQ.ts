import { EntityStatus, UserRole } from "@etsoo/appscript";

/**
 * User update request data
 * 用户更新请求数据
 */
export type UserUpdateRQ = {
  /**
   * User role
   * 用户角色
   */
  userRole?: UserRole;

  /**
   * Name
   * 姓名
   */
  name?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Expiry
   * 过期时间
   */
  expiry?: string; // DateTimeOffset as ISO string

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;

  /**
   * Report to
   * 汇报对象
   */
  reportTo?: number;

  /**
   * Department ids
   * 所属部门编号
   */
  depts?: number[];

  /**
   * Permission group ids
   * 所属权限组编号
   */
  groups?: number[];

  /**
   * Permission items included
   * 包含的权限项目
   */
  permissionIncluded?: number[];

  /**
   * Permission items excluded
   * 排除的权限项目
   */
  permissionExcluded?: number[];
};
