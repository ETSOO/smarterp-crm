import { TokenAuthRQ } from "@etsoo/appscript";

/**
 * Person profile send email request data
 * 人员档案发送邮件请求数据
 */
export type PersonProfileSendEmailRQ = {
  /**
   * Token auth data
   * 令牌认证数据
   */
  auth: TokenAuthRQ;

  /**
   * Profile ID
   * 档案 ID
   */
  id: number;

  /**
   * Persons
   * 人员编号数组
   */
  persons: number[];

  /**
   * Message
   * 留言
   */
  message?: string;

  /**
   * Include attachments or not
   * 是否包含附件
   */
  includeAttachments?: boolean;
};
