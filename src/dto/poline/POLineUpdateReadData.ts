import { CustomFieldData, EntityStatus } from "@etsoo/appscript";

/**
 * Purchase line update read data
 * 更新采购行读取数据
 */
export type POLineUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Purchase line id
   * 采购行编号
   */
  poId: number;

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
  startTime?: Date | string;

  /**
   * End time
   * 结束时间
   */
  endTime?: Date | string;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * User id
   * 用户编号
   */
  userId?: number;

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

  /**
   * Is deletable
   * 是否可删除
   */
  isDeletable: boolean;
};
