import { PromotionItem } from "../promotion/PromotionItem";
import { CustomerSaleData } from "./CustomerSaleData";

/**
 * Customer read data for sale
 * 客户读取销售数据
 */
export type CustomerReadForSaleData = {
  /**
   * Customer data
   * 客户数据
   */
  customer?: CustomerSaleData;

  /**
   * Promotions
   * 促销
   */
  promotions: PromotionItem[];
};
