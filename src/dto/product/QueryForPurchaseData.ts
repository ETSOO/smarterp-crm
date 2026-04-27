import { CustomFieldData } from "@etsoo/appscript";
import { CategoryItem } from "../CategoryItem";
import { PromotionItem } from "../promotion/PromotionItem";

/**
 * Query product data for purchase
 * 查询产品数据用于采购
 */
export type QueryForPurchaseData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Logo
   * 图标
   */
  logo?: string;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Supplier name
   * 供应商名称
   */
  supplierName?: string;

  /**
   * Supplier description
   * 供应商描述
   */
  supplierDescription?: string;

  /**
   * Supplier assigned id
   * 供应商分配的编号
   */
  supplierAssignedId?: string;

  /**
   * Supplier retail price
   * 供应商零售价
   */
  supplierRetailPrice?: number;

  /**
   * Minimum purchase qty
   * 最少购买量
   */
  minQty?: number;

  /**
   * Purchase minimum unit
   * 购买最小单位
   */
  stepQty?: number;

  /**
   * Maximum purchase qty
   * 最大购买量
   */
  capQty?: number;

  /**
   * Asset qty
   * 资产数量
   */
  assetQty?: number;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Cost price
   * 成本价
   */
  costPrice?: number;

  /**
   * Unit name
   * 单位名称
   */
  unitName: string;

  /**
   * Modifiers
   * 定制选项
   */
  modifiers?: CustomFieldData[];

  /**
   * Categories
   * 类目
   */
  categories?: CategoryItem[];

  /**
   * Promotions
   * 促销
   */
  promotions: PromotionItem[];
};
