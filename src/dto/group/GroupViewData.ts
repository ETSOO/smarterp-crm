import { UserRole } from "@etsoo/appscript";

/**
 * Permission group view data
 * 权限组浏览数据
 */
export type GroupViewData = {
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
   * Permission items
   * 权限项目
   */
  items: number[];

  /**
   * Organization id
   * 所属机构编号
   */
  orgId?: number;
};
