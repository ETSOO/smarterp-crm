import { EntityStatus } from "@etsoo/appscript";
import { ProductInventoryWay } from "./ProductInventoryWay";
import { ProductScope } from "./ProductScope";
import { ProductUsage } from "./ProductUsage";
import { CategoryItem } from "../CategoryItem";
import { ProductPriceItem } from "./ProductPriceItem";
import { CustomCultureItem } from "../system/CustomCultureItem";

/**
 * Product view data
 * 产品浏览数据
 */
export type ProductViewData = {
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
   * Description
   * 描述
   */
  description?: string;

  /**
   * Unit id
   * 产品单位编号
   */
  unitId: number;

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
   * Usage
   * 使用范围
   */
  usage: ProductUsage;

  /**
   * Sale scope
   * 销售范围
   */
  scope: ProductScope;

  /**
   * Inventory management way
   * 库存管理方式
   */
  inventoryWay: ProductInventoryWay;

  /**
   * Query keyword
   * 查询关键词
   */
  queryKeyword?: string;

  /**
   * Tax rate
   * 税率
   */
  taxRate?: number;

  /**
   * Logo
   * 图标
   */
  logo?: string;

  /**
   * Introduction URL
   * 介绍网址
   */
  introductionUrl?: string;

  /**
   * Status
   * 状况
   */
  status: EntityStatus;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;

  /**
   * Categories
   * 类目
   */
  categories: CategoryItem[];

  /**
   * Prices
   * 所有价格
   */
  prices: ProductPriceItem[];

  /**
   * Keywords
   * 关键词
   */
  tags?: string[];

  /**
   * Cultures
   * 文化
   */
  cultures: CustomCultureItem[];
};
