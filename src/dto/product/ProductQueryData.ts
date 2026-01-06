import { EntityStatus } from "@etsoo/appscript";
import { ProductScope } from "./ProductScope";
import { CategoryItem } from "../CategoryItem";

/**
 * Product query data
 * 产品查询数据
 */
export type ProductQueryData = {
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
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Asset qty
   * 资产数量
   */
  assetQty?: number;

  /**
   * Sale scope
   * 销售范围
   */
  scope: ProductScope;

  /**
   * Currency
   * 币种
   */
  currency?: string;

  /**
   * Retail price
   * 零售价
   */
  retailPrice?: number;

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
   * Status
   * 状况
   */
  status: EntityStatus;

  /**
   * Categories
   * 类目
   */
  categories?: CategoryItem[];
};
