import { PersonRelationType } from "../../dto/person/PersonRelationType";

/**
 * Contact relation add request data
 * 添加联系人关系请求数据
 */
export type ContactRelationAddRQ = {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Contact's person id
   * 联系人的人员编号
   */
  contactId: number;

  /**
   * Relation type
   * 关系类型
   */
  relationType: PersonRelationType;

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
};
