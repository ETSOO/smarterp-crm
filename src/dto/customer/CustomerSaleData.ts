import { PromotionItem } from "../promotion/PromotionItem";

/**
 * Customer data for sale
 * 客户销售数据
 */
export type CustomerSaleData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Preferred name
   * 首选名
   */
  preferredName?: string;

  /**
   * Is legal person
   * 是否法人
   */
  isLegalPerson: boolean;

  /**
   * Promotions
   * 促销
   */
  promotions?: PromotionItem[];
};
