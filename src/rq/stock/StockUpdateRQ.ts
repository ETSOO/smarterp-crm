import { DataTypes } from "@etsoo/shared";

/**
 * Stock update request data
 * 库存更新请求数据
 */
export type StockUpdateRQ = DataTypes.EditType<{
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
   * Tracking number
   * 物流编号
   */
  trackingNumber?: string;
}>;
