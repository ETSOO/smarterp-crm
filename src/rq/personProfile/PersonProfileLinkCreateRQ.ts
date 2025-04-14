import { PersonProfileLinkKind } from "../../dto/personProfile/PersonProfileLinkKind";

/**
 * Person profile link create request data
 * 人员档案关联创建请求数据
 */
export type PersonProfileLinkCreateRQ = {
  /**
   * Person profile id
   * 人员档案编号
   */
  profileId: number;

  /**
   * Target profile id
   * 关联的人员档案编号
   */
  targetProfileId?: number;

  /**
   * Kind
   * 类型
   */
  kind?: PersonProfileLinkKind;

  /**
   * Content
   * 内容
   */
  content?: string;
};
