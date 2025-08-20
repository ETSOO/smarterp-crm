import { StatusQueryRQ } from "@etsoo/appscript";
import { PersonRelationType } from "../../dto/person/PersonRelationType";

/**
 * Contact list request data
 * 联系人列表请求数据
 */
export type ContactListRQ = StatusQueryRQ & {
  /**
   * Person ID
   * 所属人员编号
   */
  personId: number;

  /**
   * Relation type
   * 关系类型
   */
  relationType?: PersonRelationType;

  /**
   * Tag
   * 标签
   */
  tag?: string;

  /**
   * Category
   * 所属分类
   */
  categoryId?: number;

  /**
   * Categories
   * 所属多个分类
   */
  categoryIds?: number[];

  /**
   * City
   * 所在城市
   */
  city?: string;
};
