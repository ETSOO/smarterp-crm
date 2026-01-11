/**
 * Product category create request data
 * 产品分类创建请求数据
 */
export type ProductCategoryCreateRQ = {
  /**
   * Parent Id
   * 父级编号
   */
  parentId?: number;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Assigned Id
   * 分配编号
   */
  assignedId?: string;

  /**
   * Order index
   * 排序索引
   */
  orderIndex?: number;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;
};
