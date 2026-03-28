import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * Order list request data
 * 订单列表请求数据
 */
export type OrderListRQ = StatusQueryRQ & {
  /**
   * Tag
   * 标签
   */
  tag?: string;

  /**
   * Tag ID
   * 标签编号
   */
  tagId?: number;

  /**
   * Source
   * 来源
   */
  source?: string;

  /**
   * Customer id
   * 客户编号
   */
  customerId?: number;

  /**
   * Currency
   * 币种
   */
  currency?: string;

  /**
   * Culture
   * 文化
   */
  culture?: string;

  /**
   * Delivery id
   * 配送方式编号
   */
  deliveryId?: number;

  /**
   * Payment id
   * 付款方式
   */
  paymentId?: number;

  /**
   * User id
   * 用户编号
   */
  userId?: number;
};
