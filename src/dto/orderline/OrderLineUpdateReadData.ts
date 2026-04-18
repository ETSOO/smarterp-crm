import { CustomFieldData, EntityStatus } from "@etsoo/appscript";

/**
 * Order line update read data
 * 更新订单行读取数据
 */
export type OrderLineUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Order id
   * 订单编号
   */
  orderId: number;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Product id
   * 产品编号
   */
  productId: number;

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
   * Original price
   * 原价
   */
  originalPrice: number;

  /**
   * Cost price
   * 成本价
   */
  costPrice: number;

  /**
   * Price
   * 价格
   */
  price: number;

  /**
   * Qty
   * 数量
   */
  qty: number;

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
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * Modifiers
   * 定制选项
   */
  modifiers?: CustomFieldData[];

  /**
   * JSON data
   * JSON 数据
   */
  data?: Record<string, unknown>;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;
};
