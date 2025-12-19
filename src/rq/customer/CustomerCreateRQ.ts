import { EntityStatus } from "@etsoo/appscript";
import { AddressCreateRQ } from "../person/AddressCreateRQ";

/**
 * Create customer request data
 * 创建客户请求数据
 */
export type CustomerCreateRQ = {
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
   * Phone
   * 电话
   */
  phone?: string;

  /**
   * PIN
   * 身份证号码
   */
  pin?: string;

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
