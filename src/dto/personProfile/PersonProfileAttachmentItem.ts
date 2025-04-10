/**
 * Person profile attachment item
 * 人员档案附件项
 */
export type PersonProfileAttachmentItem = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * File size
   * 文件大小
   */
  fileSize: number;

  /**
   * Content type
   * 文件类型
   */
  contentType: string;

  /**
   * Description
   * 描述
   */
  description: string;

  /**
   * File extension
   * 文件扩展名
   */
  extension: string;

  /**
   * User id
   * 用户编号
   */
  userId: number;

  /**
   * User name
   * 用户姓名
   */
  userName: string;

  /**
   * Creation
   * 登记时间
   */
  creation: string | Date;

  /**
   * Is the author self
   * 是否作者自己
   */
  isSelf: boolean;
};
