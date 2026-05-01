import { CustomFieldData, EntityStatus } from "@etsoo/appscript";
import { PromotionCodeCalculation } from "../promotion/PromotionCode";

/**
 * Purchase order line view data
 * 采购项目浏览数据
 */
export type POLineViewData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * PO title
   * 采购标题
   */
  poTitle: string;

  /**
   * PO id
   * 采购编号
   */
  poId: number;

  /**
   * Currency
   * 币种
   */
  currency: string;

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
   * Qty delivered
   * 已交付数量
   */
  qtyDelivered: number;

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
   * PO user id
   * 采购用户编号
   */
  poUserId: number;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId: number;

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
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * PO status
   * 采购状态
   */
  poStatus: EntityStatus;

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
   * 是否可恢复原状
   */
  isRestorable: boolean;
};
