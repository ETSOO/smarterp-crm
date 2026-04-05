/**
 * Start to execute request data
 * 开始执行请求数据
 */
export type OrderLineStartRQ = {
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
   * Init start ime
   * 初始化开始时间
   */
  initStart?: boolean;
};
