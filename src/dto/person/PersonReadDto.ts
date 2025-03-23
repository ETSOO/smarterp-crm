import { EntityStatus, UserRole } from "@etsoo/appscript";
import { ContactItem } from "./ContactItem";
import { CategoryItem } from "./CategoryItem";
import { AddressItem } from "./AddressItem";

/**
 * Person marital status
 * 个人婚姻状况
 */
enum PersonMaritalStatus {
  /**
   * Single
   * 未婚
   */
  Single = 1,

  /**
   * Married
   * 已婚
   */
  Married = 2,

  /**
   * Partnership
   * 同居伴侣
   */
  Partnership = 3,

  /**
   * Separated
   * 分居
   */
  Separated = 4,

  /**
   * Divorced
   * 离异
   */
  Divorced = 5,

  /**
   * Widowed
   * 丧偶
   */
  Widowed = 6
}

/**
 * Person education
 * 个人学历
 */
enum PersonEducation {
  /**
   * Primary school
   * 小学
   */
  PrimarySchool = 1,

  /**
   * Grade 2
   * 小学2年级
   */
  PrimarySchool2 = 2,

  /**
   * Grade 3
   * 小学3年级
   */
  PrimarySchool3 = 3,

  /**
   * Grade 4
   * 小学4年级
   */
  PrimarySchool4 = 4,

  /**
   * Grade 5
   * 小学5年级
   */
  PrimarySchool5 = 5,

  /**
   * Grade 6
   * 小学6年级
   */
  PrimarySchool6 = 6,

  /**
   * Middle school
   * 初中
   */
  MiddleSchool = 20,

  /**
   * Grade 7
   * 初中1年级
   */
  MiddleSchool1 = 27,

  /**
   * Grade 8
   * 初中2年级
   */
  MiddleSchool2 = 28,

  /**
   * Grade 9
   * 初中3年级
   */
  MiddleSchool3 = 29,

  /**
   * High school
   * 高中
   */
  HighSchool = 40,

  /**
   * Grade 10
   * 高中1年级
   */
  HighSchool1 = 51,

  /**
   * Grade 11
   * 高中2年级
   */
  HighSchool2 = 52,

  /**
   * Grade 12
   * 高中3年级
   */
  HighSchool3 = 53,

  /**
   * University
   * 大学
   */
  University = 80,

  /**
   * Diploma Graduate
   * 大专毕业
   */
  University2 = 82,

  /**
   * Graduated from Five Types of Higher Education (Self-study Exam, Open University, Night University, Party School, Correspondence Course)
   * 五大学历毕业（自考、电大、夜大、党校、函授）
   */
  University4 = 84,

  /**
   * University Student
   * 大学在读
   */
  University6 = 86,

  /**
   * Bachelor's Graduate (No Degree)
   * 大学本科毕业（无学士学位）
   */
  University8 = 88,

  /**
   * Bachelor's Graduate (With Degree)
   * 大学本科毕业且获得学士学位
   */
  University10 = 90,

  /**
   * Postgraduate (No Degree)
   * 研究生毕业（无学位证书）
   */
  University12 = 92,

  /**
   * Master’s Graduate
   * 硕士学位毕业
   */
  University14 = 94
}

/**
 * Person education degree
 * 个人学位
 */
enum PersonDegree {
  /**
   * Pre-bachelor
   * 副学士
   */
  PreBachelor = 1,

  /**
   * Bachelor
   * 学士
   */
  Bachelor = 2,

  /**
   * Master
   * 硕士
   */
  Master = 3,

  /**
   * Doctor
   * 博士
   */
  Doctor = 4
}

/**
 * Titles
 * 称谓
 */
enum PersonTitle {
  /**
   * Mr.
   * 先生
   */
  MR = 1,

  /**
   * Ms.
   * 女士
   */
  MS = 2,

  /**
   * Mrs.
   * 夫人
   */
  MRS = 3,

  /**
   * Miss
   * 小姐
   */
  Miss = 4,

  /**
   * Dr.
   * 博士
   */
  DR = 11,

  /**
   * Prof.
   * 教授
   */
  Prof = 12
}

/**
 * Person private data
 * 人员私有数据
 */
type PersonPrivateData = {
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
  maritalStatus?: PersonMaritalStatus;

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
};

/**
 * Person view data
 * 人员浏览数据
 */
export type PersonViewData = ContactItem & {
  /**
   * Unique identifier
   * 唯一标识符
   */
  uid: string;

  /**
   * Is legal person (enterprise)
   * 是否为法人（企业）
   */
  isLegalPerson: boolean;

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
   * Titles
   * 称谓
   */
  title?: PersonTitle;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Avatar
   * 头像
   */
  avatar?: string;

  /**
   * Job title
   * 工作头衔
   */
  jobTitle?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Categories
   * 类目
   */
  categories?: CategoryItem[];

  /**
   * Keywords
   * 关键词
   */
  keywords?: string[];

  /**
   * Addresses
   * 地址
   */
  addresses?: AddressItem[];

  /**
   * Report to (person.id)
   * 汇报对象
   */
  reportTo?: number;

  /**
   * Report to name
   * 汇报对象姓名
   */
  reportToName?: string;

  /**
   * Creation time
   * 创建时间
   */
  creation: string;

  /**
   * Status
   * 状况
   */
  status: EntityStatus;

  /**
   * Query keyword
   * 查询关键字
   */
  queryKeyword?: string;

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
   * User role, permission level
   * 用户角色，权限等级
   */
  userRole?: UserRole;

  /**
   * Inviter
   * 邀请人编号
   */
  inviterName?: string;

  /**
   * Expiry time
   * 到期时间
   */
  expiry?: string;

  /**
   * Refresh time
   * 刷新时间
   */
  refreshTime: string;

  /**
   * Private data
   * 私有数据
   */
  privateData?: PersonPrivateData;
};
