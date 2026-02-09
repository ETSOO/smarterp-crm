import { PersonProductJsonData } from "../../dto/personProduct/PersonProductJsonData";

/**
 * Person product update request data
 * 人员个性化产品更新请求数据
 */
export type PersonProductUpdateRQ = {
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
   * Assigned ID
   * 分配编号
   */
  assignedId?: string;

  /**
   * JSON data
   * JSON数据
   */
  jsonData?: PersonProductJsonData;

  /**
   * Changed fields
   * 变更字段
   */
  changedFields?: string[];
};
