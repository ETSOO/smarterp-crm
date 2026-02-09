import { ProductCustomData } from "../product/ProductCustomData";
import { ProductSimplePriceItem } from "../product/ProductSimplePriceItem";

/**
 * Person product JSON data
 * 人员个性化产品 JSON 数据
 */
export type PersonProductJsonData = {
  /**
   * Cultures
   * 文化
   */
  cultures?: ProductCustomData[];

  /**
   * Prices
   * 价格
   */
  prices?: ProductSimplePriceItem[];
};
