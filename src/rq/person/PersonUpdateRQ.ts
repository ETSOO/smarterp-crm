import { EntityStatus, IdentityTypeFlags } from "@etsoo/appscript";
import { DataTypes } from "@etsoo/shared";
import { MaritalStatus } from "../../dto/person/MaritalStatus";
import { PersonEducation } from "../../dto/person/PersonEducation";
import { PersonDegree } from "../../dto/person/PersonDegree";

/**
 * Person update request data
 * 人员更新请求数据
 */
export type PersonUpdateRQ = DataTypes.EditType<{
  /**
   * Identity type
   * 识别类型
   */
  identityType?: IdentityTypeFlags;

  /**
   * Is legal person (enterprise)
   * 是否为法人（企业）
   */
  isLegalPerson?: boolean;

  /**
   * Name
   * 姓名
   */
  name?: string;

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
   * Latin given name
   * 拉丁名
   */
  latinGivenName?: string;

  /**
   * Latin family name
   * 拉丁姓
   */
  latinFamilyName?: string;

  /**
   * Preferred name
   * 首先名
   */
  preferredName?: string;

  /**
   * Job title
   * 职务
   */
  jobTitle?: string;

  /**
   * Titles
   * 称谓
   */
  title?: number;

  /**
   * Gender
   * 性别
   */
  gender?: string;

  /**
   * Birthday
   * 生日
   */
  birthday?: string;

  /**
   * Ethnicity
   * 种族
   */
  ethnicity?: string;

  /**
   * Height in cm
   * 高度（厘米）
   */
  height?: number;

  /**
   * Weight in kg
   * 重量（千克）
   */
  weight?: number;

  /**
   * Marital status
   * 婚姻状况
   */
  maritalStatus?: MaritalStatus;

  /**
   * Education
   * 学历
   */
  education?: PersonEducation;

  /**
   * Education degree
   * 学位
   */
  degree?: PersonDegree;

  /**
   * Political status
   * 政治面貌
   */
  politicalStatus?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Query keyword
   * 查询关键字
   */
  queryKeyword?: string;

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
   * Addresses
   * 地址
   */
  addresses?: number[];

  /**
   * Report to (person.id)
   * 汇报对象
   */
  reportTo?: number;

  /**
   * Regions
   * 地区
   */
  regions?: string[];

  /**
   * Currencies
   * 币种
   */
  currencies?: string[];

  /**
   * Cultures
   * 文化
   */
  cultures?: string[];

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;

  /**
   * Expiry time
   * 到期时间
   */
  expiry?: string | Date;

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;
}>;
