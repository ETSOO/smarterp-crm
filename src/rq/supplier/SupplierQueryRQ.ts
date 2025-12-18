import { SupplierListRQ } from "./SupplierListRQ";

/**
 * Supplier query request data
 * 供应商查询请求数据
 */
export type SupplierQueryRQ = SupplierListRQ & {
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
