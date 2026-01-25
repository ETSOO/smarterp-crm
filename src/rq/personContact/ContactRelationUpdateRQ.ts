import { PersonRelationType } from "../../dto/person/PersonRelationType";
import { DataTypes } from "@etsoo/shared";

/**
 * Update contact relation request data
 * 更新联系人关系请求数据
 */
export type ContactRelationUpdateRQ = DataTypes.EditType<{
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
   * Is default relation
   * 是否为默认关系
   */
  isDefault?: boolean;

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
