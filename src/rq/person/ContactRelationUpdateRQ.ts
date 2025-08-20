import { PersonRelationType } from "../../dto/person/PersonRelationType";

/**
 * Update contact relation request data
 * 更新联系人关系请求数据
 */
export type ContactRelationUpdateRQ = {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Contact id
   * 联系人编号
   */
  contactId: number;

  /**
   * Relation type
   * 关系类型
   */
  relationType?: PersonRelationType;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;

  /**
   * Changed fields
   * 更改的字段
   */
  changedFields?: string[];
};
