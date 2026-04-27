import { PromotionItem } from "../promotion/PromotionItem";

/**
 * Supplier read data for purchase
 * 供应商读取采购数据
 */
export type SupplierReadForPurchaseData = {
  /**
   * Supplier data
   * 供应商数据
   */
  supplier?: SupplierPurchaseData;
};

/**
 * Supplier data for purchase
 * 供应商采购数据
 */
export type SupplierPurchaseData = {
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
  promotions: PromotionItem[];
};
