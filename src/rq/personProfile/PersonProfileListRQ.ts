import { QueryRQ } from "@etsoo/appscript";
import { PersonProfileKind } from "../../dto/personProfile/PersonProfileKind";
import { PersonProfileImportance } from "../../dto/personProfile/PersonProfileImportance";

/**
 * Person profile list request data
 * 人员档案列表请求数据
 */
export type PersonProfileListRQ = QueryRQ & {
  /**
   * Person id
   * 人员编号
   */
  personId?: number;

  /**
   * Participant id, 0 for current user
   * 参与者编号，0为当前用户
   */
  participantId?: number;

  /**
   * Kind
   * 类型
   */
  kind?: PersonProfileKind;

  /**
   * Order / PO id
   * 订单 / 采购编号
   */
  orderId?: number;

  /**
   * Happen date start
   * 发生日期开始
   */
  happenDateStart?: string | Date;

  /**
   * Happen date end
   * 发生日期结束
   */
  happenDateEnd?: string | Date;

  /**
   * Creation start
   * 登记日期开始
   */
  creationStart?: string | Date;

  /**
   * Creation end
   * 登记日期结束
   */
  creationEnd?: string | Date;

  /**
   * Importance
   * 重要性
   */
  importance?: PersonProfileImportance;

  /**
   * Assignee id
   * 分配用户id
   */
  assigneeId?: number;
};
