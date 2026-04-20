/**
 * Order duplicate test request data
 * 订单重复测试请求数据
 */
export type OrderDuplicateTestRQ = {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;

  /**
   * Title
   * 标题
   */
  title?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Source id
   * 源编号
   */
  sourceId?: string;

  /**
   * Is order or not
   * 是否为订单
   */
  isOrder?: boolean;
};
