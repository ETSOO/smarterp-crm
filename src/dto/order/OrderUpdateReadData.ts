import { EntityStatus } from "@etsoo/appscript";

/**
 * Order update read data
 * 更新订单读取数据
 */
export type OrderUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

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
   * Status
   * 状况
   */
  status: EntityStatus;
};
