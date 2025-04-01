import { EntityStatus, UserRole } from "@etsoo/appscript";
import { PersonProfileKind } from "./PersonProfileKind";
import { PersonProfileImportance } from "./PersonProfileImportance";
import { DataTypes } from "@etsoo/shared";

/**
 * Person profile update read data
 * 个人档案更新读取数据
 */
export type PersonProfileUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Person id
   * 个人编号
   */
  personId: number;

  /**
   * Other persons
   * 其他参与者
   */
  persons?: DataTypes.IdNameItem[];

  /**
   * Order id
   * 订单编号
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
   * 评价
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
  happenDate: string | Date;

  /**
   * Happen date end
   * 发生日期结束
   */
  happenDateEnd?: string | Date;

  /**
   * User role for privacy control
   * 隐私控制的用户角色
   */
  userRole?: UserRole;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;

  /**
   * Importance
   * 重要性
   */
  importance?: PersonProfileImportance;

  /**
   * Assignee id
   * 执行人编号
   */
  assigneeId?: number;
};
