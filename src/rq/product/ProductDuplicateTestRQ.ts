/**
 * Product duplicate test request data
 * 产品重复测试请求数据
 */
export type ProductDuplicateTestRQ = {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;

  /**
   * Name
   * 名称
   */
  name?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;
};
