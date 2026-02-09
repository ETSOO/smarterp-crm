import { ProductSimplePriceItem } from "./ProductSimplePriceItem";

// 产品价格项
export type ProductPriceItem = ProductSimplePriceItem & {
  /**
   * Promotion price
   * 促销价
   */
  promotionPrice?: number;

  /**
   * Channel price
   * 渠道价
   */
  channelPrice?: number;

  /**
   * Cost price
   * 成本价
   */
  costPrice?: number;
};
