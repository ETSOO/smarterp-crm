import { EntityStatus } from "@etsoo/appscript";
import { PersonProfileKind } from "./PersonProfileKind";

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
   * Other participants
   * 其他参与者
   */
  persons?: number[];

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
  happenDate: string;

  /**
   * Happen date end
   * 发生日期结束
   */
  happenDateEnd?: string;

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
};
