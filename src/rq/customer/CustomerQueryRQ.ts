import { CustomerListRQ } from "./CustomerListRQ";

/**
 * Customer query request data
 * 客户查询请求数据
 */
export type CustomerQueryRQ = CustomerListRQ & {
  /**
   * Assigned ID
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Contact information
   * 联系信息
   */
  info?: string;
};
