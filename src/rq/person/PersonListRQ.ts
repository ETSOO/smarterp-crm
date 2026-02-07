import { IdentityTypeFlags, StatusQueryRQ } from "@etsoo/appscript";
import { PersonEducation } from "../../dto/person/PersonEducation";

/**
 * Person list request data
 * 成员列表请求数据
 */
export type PersonListRQ = StatusQueryRQ & {
  /**
   * Identity type
   * 识别类型
   */
  identityType?: IdentityTypeFlags;

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
   * Category and all descendant category ids
   * 所属分类及所有下级子类编号
   */
  categoryIdAll?: number;

  /**
   * Categories
   * 所属多个分类
   */
  categoryIds?: number[];

  /**
   * Education
   * 受教育程度
   */
  education?: PersonEducation;

  /**
   * City
   * 所在城市
   */
  city?: string;
};
