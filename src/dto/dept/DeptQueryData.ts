import { EntityStatus } from "@etsoo/appscript";

/**
 * Department query data
 * 部门查询数据
 */
export type DeptQueryData = {
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
   * Leader
   * 主管
   */
  leader?: string;

  /**
   * Staff
   * 人员
   */
  staff: number;

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
