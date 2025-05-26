import { EntityStatus, UserRole } from "@etsoo/appscript";

/**
 * User update read data
 * 用户更新读取数据
 */
export type UserUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Name
   * 姓名
   */
  name: string;

  /**
   * User role, permission level
   * 用户角色，权限等级
   */
  userRole?: UserRole;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Report to (person.id)
   * 汇报对象
   */
  reportTo?: number;

  /**
   * Expiry time
   * 到期时间
   */
  expiry?: string; // DateTimeOffset as ISO string

  /**
   * Status
   * 状况
   */
  status: EntityStatus;

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
