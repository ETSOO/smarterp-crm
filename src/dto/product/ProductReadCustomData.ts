import { ProductCustomData } from "./ProductCustomData";
import { ProductSimplePriceItem } from "./ProductSimplePriceItem";

/**
 * Product read custom data
 * 产品读取自定义数据
 */
export type ProductReadCustomData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Cultures
   * 文化
   */
  cultures: ProductCustomData[];

  /**
   * Prices
   * 价格
   */
  prices: ProductSimplePriceItem[];
};
