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
   * Name
   * 名称
   */
  name?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Assigned ID
   * 分配编号
   */
  assignedId?: string;

  /**
   * Currency
   * 币种
   */
  currency?: string;

  /**
   * Retail price
   * 零售价
   */
  retailPrice?: number;
};
