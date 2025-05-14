import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * User list request data
 * 用户列表请求数据
 */
export type UserListRQ = StatusQueryRQ & {
  /**
   * Department ID
   * 部门编号
   */
  deptId?: number;

  /**
   * Permission group ID
   * 权限组编号
   */
  groupId?: number;
};
