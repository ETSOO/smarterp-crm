import { QueryRQ, EntityStatus } from "@etsoo/appscript";

/**
 * Order line list request data
 * 订单行列表请求数据
 */
export type OrderLineListRQ = QueryRQ & {
  /**
   * Order id
   * 订单编号
   */
  orderId?: number;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * Status
   * 状态
   */
  status?: EntityStatus;
};
