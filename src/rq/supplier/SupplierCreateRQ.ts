import { EntityStatus } from "@etsoo/appscript";
import { AddressCreateRQ } from "../personAddress/AddressCreateRQ";

/**
 * Create supplier request data
 * 创建供应商请求数据
 */
export type SupplierCreateRQ = {
  /**
   * Is legal person (enterprise)
   * 是否为法人（企业）
   */
  isLegalPerson: boolean;

  /**
   * Name
   * 名称 / 姓名
   */
  name: string;

  /**
   * Preferred name
   * 首先名
   */
  preferredName?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Birthday
   * 生日
   */
  birthday?: Date | string;

  /**
   * Supplier phone
   * 供应商电话
   */
  phone?: string;

  /**
   * PIN
   * 身份编号
   */
  pin?: string;

  /**
   * Tax ID
   * 税号
   */
  taxId?: string;

  /**
   * Address
   * 地址
   */
  address?: AddressCreateRQ;

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
   * Contact
   * 联系人
   */
  contact?: string;

  /**
   * Contact mobile
   * 联系人手机
   */
  mobile?: string;

  /**
   * Contact email
   * 联系人电子邮箱
   */
  email?: string;

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;
};
