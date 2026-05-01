import { POLineListRQ } from "./POLineListRQ";

/**
 * PO line query asset request data
 * 查询采购行资产请求数据
 */
export type POLineQueryAssetRQ = POLineListRQ & {
  /**
   * User id
   * 用户编号
   */
  userId?: number;

  /**
   * Creation start
   * 创建开始
   */
  creationStart?: Date | string;

  /**
   * Creation end
   * 创建结束
   */
  creationEnd?: Date | string;
};
