import { ProductCustomData } from "../product/ProductCustomData";

/**
 * Person product query data
 * 人员个性化产品查询数据
 */
export type PersonProductQueryData = {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Product name
   * 产品名称
   */
  productName: string;

  /**
   * Product assigned id
   * 产品分配编号
   */
  productAssignedId?: string;

  /**
   * Custom assigned ID
   * 自定义分配编号
   */
  assignedId?: string;

  /**
   * Cultures
   * 文化
   */
  cultures?: ProductCustomData[];
};
