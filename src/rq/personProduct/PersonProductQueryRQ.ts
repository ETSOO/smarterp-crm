import { QueryPagingData } from "@etsoo/appscript";

/**
 * Person product query request data
 * 人员个性化产品查询请求数据
 */
export type PersonProductQueryRQ = {
  /**
   * Person id
   * 人员编号
   */
  personId?: number;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * Assigned ID
   * 分配编号
   */
  assignedId?: string;

  /**
   * Query paging data
   * 查询分页数据
   */
  queryPaging?: QueryPagingData;
};
