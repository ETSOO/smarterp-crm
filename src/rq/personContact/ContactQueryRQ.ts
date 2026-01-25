import { ContactListRQ } from "./ContactListRQ";

/**
 * Contact query request data
 * 联系人查询请求数据
 */
export type ContactQueryRQ = ContactListRQ & {
  /**
   * Job title
   * 职位
   */
  jobTitle?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Contact information
   * 联系信息
   */
  info?: string;

  /**
   * Address
   * 地址
   */
  address?: string;
};
