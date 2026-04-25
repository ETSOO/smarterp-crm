import { EntityStatus } from "@etsoo/appscript";
import { PromotionSaleItemBase } from "../../dto/promotion/PromotionCode";

/**
 * Purchase order line request data
 * 采购单项目请求数据
 */
export type POLineRQ = {
  /**
   * Product ID
   * 产品编号
   */
  productId: number;

  /**
   * Qty
   * 数量
   */
  qty: number;

  /**
   * Price, to be validated by the backend when value presented
   * 价格，如果提供后台会验证这个值是否正确
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
   * Promotions
   * 促销
   */
  promotions?: PromotionSaleItemBase[];

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;
};
