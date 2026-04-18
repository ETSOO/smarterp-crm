import { CustomFieldData, EntityStatus } from "@etsoo/appscript";
import { PromotionCodeCalculation } from "../..";

/**
 * Order line view data
 * 订单项目浏览数据
 */
export type OrderLineViewData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Order title
   * 订单标题
   */
  orderTitle: string;

  /**
   * Order id
   * 订单编号
   */
  orderId: number;

  /**
   * Product name
   * 产品名称
   */
  productName: string;

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
   * Asset qty
   * 资产数量
   */
  assetQty: number;

  /**
   * Amount
   * 金额
   */
  amount: number;

  /**
   * Discount
   * 折扣
   */
  discount: number;

  /**
   * Promotions
   * 促销细节
   */
  promotions?: PromotionCodeCalculation[];

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
   * User name
   * 用户姓名
   */
  userName?: string;

  /**
   * User id
   * 用户编号
   */
  userId?: number;

  /**
   * Order user id
   * 订单用户编号
   */
  orderUserId: number;

  /**
   * Customer id
   * 客户编号
   */
  customerId: number;

  /**
   * Asset id
   * 资产编号
   */
  assetId?: number;

  /**
   * Serial number
   * 序列号
   */
  assetSn?: string;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * Supplier name
   * 供应商名称
   */
  supplierName?: string;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Order status
   * 订单状态
   */
  orderStatus: EntityStatus;

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
   * Creation
   * 登记时间
   */
  creation: Date | string;

  /**
   * Whether the order line is startable
   * 是否可开始执行
   */
  isStartable: boolean;

  /**
   * Whether the order line is completable
   * 是否可完成执行
   */
  isCompletable: boolean;

  /**
   * Whether the order line is restorable
   * 是否可回滚
   */
  isRestorable: boolean;
};
