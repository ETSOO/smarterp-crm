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
   * Person id, customer for order or supplier for purchase order
   * 人员编号，订单的客户或采购订单的供应商
   */
  personId?: number;

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
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * User id
   * 用户编号
   */
  userId?: number;

  /**
   * Is order or not
   * 是否为订单
   */
  isOrder?: boolean;
};
