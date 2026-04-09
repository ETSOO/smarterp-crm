import { EntityStatus } from "@etsoo/appscript";
import { PromotionCodeCalculation } from "../promotion/PromotionCode";

/**
 * Order view data
 * 订单浏览数据
 */
export type OrderViewData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Source
   * 订单源
   */
  source?: string;

  /**
   * Source id
   * 源编号
   */
  sourceId?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Customer id
   * 客户编号
   */
  customerId: number;

  /**
   * Customer name
   * 客户名称
   */
  customerName: string;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Description
   * 描述
   */
  description?: string;

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
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Amount
   * 总金额
   */
  amount: number;

  /**
   * Paid amount
   * 已付款金额
   */
  paidAmount: number;

  /**
   * Discount amount
   * 折扣金额
   */
  discount: number;

  /**
   * Line discount amount
   * 行折扣金额
   */
  lineDiscount: number;

  /**
   * Lines
   * 行数
   */
  lines: number;

  /**
   * Items
   * 项目数
   */
  items: number;

  /**
   * Promotions
   * 促销细节
   */
  promotions?: PromotionCodeCalculation[];

  /**
   * Culture
   * 文化
   */
  culture: string;

  /**
   * Payment way
   * 付款方式
   */
  payment?: string;

  /**
   * Payment instruction
   * 付款说明
   */
  paymentInstruction?: string;

  /**
   * Delivery way
   * 交付方式
   */
  delivery?: string;

  /**
   * Delivery instruction
   * 发货说明
   */
  deliveryInstruction?: string;

  /**
   * Formatted delivery address
   * 格式化发货地址
   */
  addressFormatted?: string;

  /**
   * Contact
   * 联系人
   */
  contact?: string;

  /**
   * Contact id
   * 联系人编号
   */
  contactId?: number;

  /**
   * User id
   * 用户编号
   */
  userId: number;

  /**
   * User
   * 用户
   */
  user: string;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Keywords
   * 关键词
   */
  tags?: string[];
};
