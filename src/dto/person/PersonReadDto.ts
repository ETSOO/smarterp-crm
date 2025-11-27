import { EntityStatus, UserRole } from "@etsoo/appscript";
import { ContactItem } from "./ContactItem";
import { CategoryItem } from "./CategoryItem";
import { AddressItem } from "./AddressItem";
import { PersonTitle } from "./PersonTitle";
import { DataTypes } from "@etsoo/shared";
import { PersonPrivateData } from "./PersonPrivateData";

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
   * Tags
   * 标签
   */
  tags?: string[];

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
   * Is editable
   * 是否可编辑
   */
  editable: boolean;

  /**
   * Contact owners
   * 联系人所有者
   */
  contactOwners?: DataTypes.IdTitleItem[];

  /**
   * Private data
   * 私有数据
   */
  privateData?: PersonPrivateData;
};
