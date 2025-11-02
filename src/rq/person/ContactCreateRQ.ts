import { PersonRelationType } from "../../dto/person/PersonRelationType";
import { PersonTitle } from "../../dto/person/PersonTitle";

/**
 * Contact create request data
 * 创建联系人请求数据
 */
export type ContactCreateRQ = {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Titles
   * 称谓
   */
  title?: PersonTitle;

  /**
   * Name
   * 姓名
   */
  name: string;

  /**
   * Preferred name
   * 首先名
   */
  preferredName?: string;

  /**
   * Given name
   * 名
   */
  givenName?: string;

  /**
   * Family name
   * 姓
   */
  familyName?: string;

  /**
   * Job title
   * 职务
   */
  jobTitle?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Gender
   * 性别
   */
  gender?: string;

  /**
   * Birthday
   * 生日
   */
  birthday?: string | Date;

  /**
   * Phone
   * 电话
   */
  phone?: string;

  /**
   * Mobile
   * 手机
   */
  mobile?: string;

  /**
   * Email
   * 电子邮箱
   */
  email?: string;

  /**
   * Relation type
   * 关系类型
   */
  relationType: PersonRelationType;

  /**
   * Categories
   * 类目
   */
  categories?: number[];

  /**
   * Keywords
   * 关键词
   */
  tags?: string[];

  /**
   * Regions
   * 地区
   */
  regions?: string[];

  /**
   * Cultures
   * 文化
   */
  cultures?: string[];
};
