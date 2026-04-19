import { OrderLineListRQ } from "./OrderLineListRQ";

/**
 * Order line query asset request data
 * 查询订单行资产请求数据
 */
export type OrderLineQueryAssetRQ = OrderLineListRQ & {
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
