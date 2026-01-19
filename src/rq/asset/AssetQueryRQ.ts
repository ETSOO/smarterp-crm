import { AssetListRQ } from "./AssetListRQ";

/**
 * Asset query request data
 * 资产查询请求数据
 */
export type AssetQueryRQ = AssetListRQ & {
  /**
   * Operator's core user id
   * 操作员的核心用户编号
   */
  userId?: number;
};
