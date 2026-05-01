import { POLineListRQ } from "./POLineListRQ";

/**
 * PO line query request data
 * 采购行查询请求数据
 */
export type POLineQueryRQ = POLineListRQ & {
  /**
   * Qty start
   * 开始数量
   */
  qtyStart?: number;
};
