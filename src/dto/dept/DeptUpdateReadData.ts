import { EntityStatus } from "@etsoo/appscript";

/**
 * Department update read data
 * 部门更新读取数据
 */
export type DeptUpdateReadData = {
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
   * Leader person id
   * 主管人员编号
   */
  leaderId: number;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;
};
