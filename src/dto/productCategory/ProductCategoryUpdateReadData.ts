/**
 * Product category update read data
 * 产品分类更新读取数据
 */
export type ProductCategoryUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

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
   * Names
   * 名称列表
   */
  names: string[];

  /**
   * Assigned Id
   * 分配编号
   */
  assignedId?: string;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;

  /**
   * Attributes definition
   * 属性定义
   */
  attributes?: string;
};
