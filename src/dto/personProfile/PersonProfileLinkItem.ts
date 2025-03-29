import { PersonProfileLinkKind } from "./PersonProfileLinkKind";

/**
 * Person profile link item
 * 人员档案链接项
 */
export interface PersonProfileLinkItem {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
   */
  kind: PersonProfileLinkKind;

  /**
   * Target profile id
   * 目标档案编号
   */
  targetProfileId?: number;

  /**
   * Target profile title
   * 目标档案标题
   */
  targetProfileTitle?: string;

  /**
   * Content
   * 内容
   */
  content?: string;

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
   * Creation
   * 登记时间
   */
  creation: string | Date;

  /**
   * Is the author self
   * 是否作者自己
   */
  isSelf: boolean;
}
