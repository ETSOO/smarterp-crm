import { EntityStatus, IdentityTypeFlags } from "@etsoo/appscript";
import { PersonPrivateData } from "./PersonPrivateData";
import { PersonTitle } from "./PersonTitle";

/**
 * Person update read data
 * 人员更新读取数据
 */
export type PersonUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Identity type
   * 识别类型
   */
  identityType: IdentityTypeFlags;

  /**
   * Is legal person (enterprise)
   * 是否为法人（企业）
   */
  isLegalPerson: boolean;

  /**
   * Name
   * 姓名
   */
  name: string;

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
  title?: PersonTitle;

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
  status: EntityStatus;

  /**
   * Private data
   * 私有数据
   */
  privateData?: PersonPrivateData;
};
