import { UserRole } from "@etsoo/appscript";

/**
 * Permission group query data
 * 权限组查询数据
 */
export type GroupQueryData = {
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
   * User roles
   * 用户角色
   */
  roles: UserRole;

  /**
   * Is system item
   * 是否为系统项目
   */
  isSystem: boolean;
};
