import { DataTypes } from "@etsoo/shared";
import { EntityStatus } from "@etsoo/appscript";

/**
 * Order line update request data
 * 订单行更新请求数据
 */
export type OrderLineUpdateRQ = DataTypes.EditType<{
  /**
   * Original price
   * 原价
   */
  originalPrice?: number;

  /**
   * Cost price
   * 成本价
   */
  costPrice?: number;

  /**
   * Qty
   * 数量
   */
  qty?: number;

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
   * Status
   * 状态
   */
  status?: EntityStatus;
}>;
