// Product price item
// 产品价格项
export type ProductPriceItem = {
  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Retail price
   * 零售价
   */
  retailPrice: number;

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
