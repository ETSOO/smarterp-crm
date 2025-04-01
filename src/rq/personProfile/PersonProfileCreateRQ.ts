import { EntityStatus, UserRole } from "@etsoo/appscript";
import { PersonProfileKind } from "../../dto/personProfile/PersonProfileKind";
import { PersonProfileImportance } from "../../dto/personProfile/PersonProfileImportance";

/**
 * Person profile create request data
 * 人员档案创建请求数据
 */
export type PersonProfileCreateRQ = {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Other participants
   * 其他参与者
   */
  persons?: number[];

  /**
   * Order / purchase id
   * 订单 / 采购编号
   */
  orderId?: number;

  /**
   * Kind
   * 类型
   */
  kind: PersonProfileKind;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Comment
   * 评论
   */
  comment: string;

  /**
   * Location
   * 位置
   */
  location?: string;

  /**
   * Location id
   * 位置编号
   */
  locationId?: number;

  /**
   * Happen date
   * 发生日期
   */
  happenDate?: string | Date;

  /**
   * Happen date end
   * 发生日期结束
   */
  happenDateEnd?: string | Date;

  /**
   * User role for privacy
   * 控制隐私的用户角色
   */
  userRole?: UserRole;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;

  /**
   * Status
   * 状况
   */
  status: EntityStatus;

  /**
   * Importance
   * 重要性
   */
  importance?: PersonProfileImportance;

  /**
   * Assignee id
   * 执行用户编号
   */
  assigneeId?: number;
};
