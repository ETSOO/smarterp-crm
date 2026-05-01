import { EntityStatus } from "@etsoo/appscript";
import { PromotionSaleItemBase } from "../..";

/**
 * Create purchase line request data
 * 创建采购行请求数据
 */
export type POLineCreateRQ = {
  /**
   * PO id
   * 采购编号
   */
  poId: number;

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
  price: number;

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
  startTime?: Date | string;

  /**
   * End time
   * 结束时间
   */
  endTime?: Date | string;

  /**
   * JSON data
   * JSON 数据
   */
  data?: Record<string, unknown>;

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;

  /**
   * Promotions
   * 促销
   */
  promotions?: PromotionSaleItemBase[];
};
