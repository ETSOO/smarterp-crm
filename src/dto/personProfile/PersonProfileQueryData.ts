import { EntityStatus } from "@etsoo/appscript";
import { PersonProfileKind } from "./PersonProfileKind";

/**
 * Person profile query data
 * 人员档案查询数据
 */
export type PersonProfileQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
   */
  kind?: PersonProfileKind;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Happen date
   * 发生日期
   */
  happenDate?: string;

  /**
   * Happen date end
   * 发生日期结束
   */
  happenDateEnd?: string;

  /**
   * Status
   * 状况
   */
  status: EntityStatus;

  /**
   * Creation
   * 登记时间
   */
  creation: string;
};
