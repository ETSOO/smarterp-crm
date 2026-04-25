import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * Purchase order list request data
 * 采购列表请求数据
 */
export type POListRQ = StatusQueryRQ & {
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
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

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
};
