/**
 * Read customer data for sale request data
 * 读取销售用的客户数据请求
 */
export type CustomerReadForSaleRQ = {
  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Customer id, null or 0 for anonymous customer
   * 客户编号，null或者0表示匿名客户
   */
  customerId?: number;
};
