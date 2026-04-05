import { EntityStatus } from "@etsoo/appscript";
import { PromotionSaleItemBase } from "../..";

/**
 * Create order line request data
 * 创建订单行请求数据
 */
export type OrderLineCreateRQ = {
  /**
   * Order id
   * 订单编号
   */
  orderId: number;

  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Qty
   * 数量
   */
  qty: number;

  /**
   * Price
   * 价格
   */
  price?: number;

  /**
   * Title
   * 标题
   */
  title?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Start time
   * 开始时间
   */
  startTime?: string | Date;

  /**
   * End time
   * 结束时间
   */
  endTime?: string | Date;

  /**
   * JSON data
   * JSON 数据
   */
  data?: Record<string, unknown>;

  /**
   * Promotions
   * 促销
   */
  promotions?: PromotionSaleItemBase[];

  /**
   * Status
   * 状态
   */
  status?: EntityStatus;
};
