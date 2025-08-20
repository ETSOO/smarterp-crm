import { PersonRelationType } from "./PersonRelationType";

/**
 * Contact relation update read data
 * 联系人关系更新读取数据
 */
export type ContactRelationUpdateReadData = {
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

  /**
   * Creation
   * 登记时间
   */
  creation: string | Date;
};
