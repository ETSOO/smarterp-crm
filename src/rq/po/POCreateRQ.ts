import { EntityStatus } from "@etsoo/appscript";
import { PromotionSaleItemBase } from "../../dto/promotion/PromotionCode";
import { POLineRQ } from "./POLineRQ";

/**
 * Create purchase order request data
 * 创建采购单请求数据
 */
export type POCreateRQ = {
  /**
   * Source
   * 来源
   */
  source?: string;

  /**
   * Source id
   * 来源编号
   */
  sourceId?: string;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId: number;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Culture
   * 文化
   */
  culture: string;

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
   * Payment way
   * 付款方式
   */
  paymentId?: number;

  /**
   * Payment instruction
   * 付款指示
   */
  paymentInstruction?: string;

  /**
   * Delivery way
   * 发货方式
   */
  deliveryId?: number;

  /**
   * Delivery instruction
   * 发货指示
   */
  deliveryInstruction?: string;

  /**
   * Start date
   * 开始时间
   */
  startDate?: Date | string;

  /**
   * End date
   * 结束时间
   */
  endDate?: Date | string;

  /**
   * Delivery address id
   * 发货地址编号
   */
  addressId?: number;

  /**
   * Contact id
   * 联系人编号
   */
  contactId?: number;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Tax amount
   * 纳税金额
   */
  taxAmount?: number;

  /**
   * JSON data
   * JSON 数据
   */
  data?: Record<string, unknown>;

  /**
   * Keywords
   * 关键词
   */
  tags?: string[];

  /**
   * Promotions
   * 促销
   */
  promotions?: PromotionSaleItemBase[];

  /**
   * Lines
   * 行
   */
  lines: POLineRQ[];

  /**
   * Amount, to be validated by the backend when value presented
   * 金额，如果提供后台会验证这个值是否正确
   */
  amount?: number;

  /**
   * User id
   * 用户编号
   */
  userId?: number;

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;
};
