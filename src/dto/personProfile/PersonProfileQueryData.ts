import { EntityStatus } from "@etsoo/appscript";
import { PersonProfileKind } from "./PersonProfileKind";
import { PersonProfileImportance } from "./PersonProfileImportance";

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
   * User name
   * 用户姓名
   */
  userName: string;

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
   * Importance
   * 重要性
   */
  importance?: PersonProfileImportance;

  /**
   * Is the author of self
   * 自己是否为作者
   */
  isSelf: boolean;

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
