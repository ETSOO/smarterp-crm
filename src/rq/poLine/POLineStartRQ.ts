/**
 * Start to execute PO line request data
 * 开始执行采购行请求数据
 */
export type POLineStartRQ = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * User id
   * 用户编号
   */
  userId?: number;

  /**
   * Init start time
   * 初始化开始时间
   */
  initStart?: boolean;
};
