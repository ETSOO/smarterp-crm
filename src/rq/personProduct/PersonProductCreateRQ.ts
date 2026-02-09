import { PersonProductJsonData } from "../../dto/personProduct/PersonProductJsonData";

/**
 * Person product create request data
 * 人员个性化产品创建请求数据
 */
export type PersonProductCreateRQ = {
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
};
