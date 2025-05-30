import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * Department list request data
 * 部门列表请求数据
 */
export type DeptListRQ = StatusQueryRQ & {
  /**
   * Leader
   * 部门主管
   */
  leaderId?: number;
};
