/**
 * Person relation type
 * 人员关系类型
 */
export enum PersonRelationType {
  /**
   * Unknown
   * 未知
   */
  Unknown = 0,

  /**
   * Employee
   * 雇员
   */
  Employee = 1,

  /**
   * Supplier
   * 供应商
   */
  Supplier = 3,

  /**
   * Media
   * 媒体
   */
  Media = 5,

  /**
   * Government
   * 政府
   */
  Government = 7,

  /**
   * Shareholder
   * 股东
   */
  Shareholder = 9,

  /**
   * Consultant
   * 顾问
   */
  Consultant = 11,

  /**
   * Child
   * 子女
   */
  Child = 50,

  /**
   * Spouse
   * 配偶
   */
  Spouse = 60,

  /**
   * Brother
   * 兄弟
   */
  Brother = 62,

  /**
   * Sister
   * 姐妹
   */
  Sister = 64,

  /**
   * Parent
   * 父母
   */
  Parent = 80,

  /**
   * Grandparent
   * 祖父母
   */
  Grandparent = 90
}
