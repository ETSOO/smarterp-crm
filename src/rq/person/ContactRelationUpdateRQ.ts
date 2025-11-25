import { PersonRelationType } from "../../dto/person/PersonRelationType";
import { DataTypes } from "@etsoo/shared";

/**
 * Update contact relation request data
 * 更新联系人关系请求数据
 */
export type ContactRelationUpdateRQ = DataTypes.EditType<{
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
}>;
