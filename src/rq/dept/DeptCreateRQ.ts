import { EntityStatus } from "@etsoo/appscript";

/**
 * Department create request data
 * 部门创建请求数据
 */
export type DeptCreateRQ = {
  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Leader person id
   * 主管人员编号
   */
  leaderId?: number;

  /**
   * Status
   * 状态
   */
  status?: EntityStatus;
};
