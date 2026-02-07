import { CategoryItem } from "../CategoryItem";
import { PromotionItem } from "../promotion/PromotionItem";

/**
 * Query product data for sale
 * 查询产品数据用于销售
 */
export type QueryForSaleData = {
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
   * Customer name
   * 客户端名称
   */
  customerName?: string;

  /**
   * Customer description
   * 客户端描述
   */
  customerDescription?: string;

  /**
   * Customer assigned id
   * 客户分配的编号
   */
  customerAssignedId?: string;

  /**
   * Customer retail price
   * 客户端零售价
   */
  customerRetailPrice?: number;

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
   * Unit name
   * 单位名称
   */
  unitName: string;

  /**
   * Categories
   * 类目
   */
  categories?: CategoryItem[];

  /**
   * Promotions
   * 促销
   */
  promotions?: PromotionItem[];
};
