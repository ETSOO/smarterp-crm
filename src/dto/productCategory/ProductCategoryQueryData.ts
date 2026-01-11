/**
 * Product category query data
 * 产品分类查询数据
 */
export type ProductCategoryQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

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
   * Creation
   * 登记时间
   */
  creation: string | Date;
};
