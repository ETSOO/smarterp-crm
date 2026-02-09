import { PersonProductJsonData } from "./PersonProductJsonData";

/**
 * Person product update read data
 * 人员个性化产品更新读取数据
 */
export type PersonProductUpdateReadData = {
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
   * JSON 数据
   */
  jsonData?: PersonProductJsonData;
};
