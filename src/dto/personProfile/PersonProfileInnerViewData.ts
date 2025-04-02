import { UserRole } from "@etsoo/appscript";
import { PersonProfileAttachmentItem } from "./PersonProfileAttachmentItem";
import { PersonProfileLinkItem } from "./PersonProfileLinkItem";
import { DataTypes } from "@etsoo/shared";

/**
 * Person profile inner view data
 * 人员档案查询浏览数据
 */
export type PersonProfileInnerViewData = {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Person name
   * 人员名称 / 姓名
   */
  personName: string;

  /**
   * Other persons
   * 其他参与者
   */
  persons?: DataTypes.IdNameItem[];

  /**
   * Order / Purchase id
   * 订单 / 采购编号
   */
  orderId?: number;

  /**
   * Order title
   * 订单标题
   */
  orderTitle?: string;

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
   * User id
   * 用户编号
   */
  userId: number;

  /**
   * User name
   * 用户姓名
   */
  userName: string;

  /**
   * User role for privacy control
   * 隐私控制的用户角色
   */
  userRole?: UserRole;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;

  /**
   * Index key
   * 索引键
   */
  indexKey?: string;

  /**
   * Assignee id
   * 执行人编号
   */
  assigneeId?: number;

  /**
   * Assignee name
   * 执行人姓名
   */
  assigneeName?: string;

  /**
   * Is admin
   * 是否为管理员
   */
  isAdmin: boolean;

  /**
   * Is the author of self
   * 自己是否为作者
   */
  isSelf: boolean;

  /**
   * Links
   * 链接
   */
  links: PersonProfileLinkItem[];

  /**
   * Attachments
   * 附件
   */
  attachments: PersonProfileAttachmentItem[];
};
