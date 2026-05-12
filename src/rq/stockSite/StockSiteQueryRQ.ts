import { QueryRQ } from "@etsoo/appscript";

/**
 * Stock site query request data
 * 库存点查询请求数据
 */
export type StockSiteQueryRQ = QueryRQ & {
  /**
   * Location id
   * 位置编号
   */
  locationId?: number;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * Refresh time start
   * 刷新时间开始
   */
  refreshTimeStart?: Date | string;

  /**
   * Refresh time end
   * 刷新时间结束
   */
  refreshTimeEnd?: Date | string;
};
