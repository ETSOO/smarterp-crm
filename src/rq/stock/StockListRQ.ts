import { QueryRQ } from "@etsoo/appscript";
import { StockKind } from "../../dto/stock/StockKind";

/**
 * Stock list request
 * 库存列表请求
 */
export type StockListRQ = {
  /**
   * Kind
   * 类型
   */
  kind?: StockKind;

  /**
   * Customer / supplier id
   * 客户 / 供应商 编号
   */
  personId?: number;

  /**
   * Shipping address id
   * 发货地址编号
   */
  locationFromId?: number;

  /**
   * Receiving address id
   * 收货地址编号
   */
  locationToId?: number;

  /**
   * User id
   * 操作用户编号
   */
  userId?: number;

  /**
   * Order / PO id
   * 订单 / 采购编号
   */
  orderId?: number;

  /**
   * Tracking number
   * 物流编号
   */
  trackingNumber?: string;

  /**
   * Is in transit
   * 是否在途
   */
  intransit?: boolean;
} & QueryRQ;
