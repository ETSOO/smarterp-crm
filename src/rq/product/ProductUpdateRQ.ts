import { EntityStatus } from "@etsoo/appscript";
import { ProductInventoryWay } from "../../dto/product/ProductInventoryWay";
import { ProductPriceItem } from "../../dto/product/ProductPriceItem";
import { ProductScope } from "../../dto/product/ProductScope";
import { ProductUsage } from "../../dto/product/ProductUsage";
import { DataTypes } from "@etsoo/shared";

/**
 * Update product request data
 * 更新产品请求数据
 */
export type ProductUpdateRQ = DataTypes.EditType<{
  /**
   * Name
   * 名称
   */
  name?: string;

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
  unitId?: number;

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
  usage?: ProductUsage;

  /**
   * Sale scope
   * 销售范围
   */
  scope?: ProductScope;

  /**
   * Inventory management way
   * 库存管理方式
   */
  inventoryWay?: ProductInventoryWay;

  /**
   * Query keyword
   * 查询关键词
   */
  queryKeyword?: string;

  /**
   * Price
   * 价格
   */
  price?: ProductPriceItem;

  /**
   * Tax rate
   * 税率
   */
  taxRate?: number;

  /**
   * Introduction URL
   * 介绍网址
   */
  introductionUrl?: string;

  /**
   * Categories
   * 类目
   */
  categories?: number[];

  /**
   * Keywords
   * 关键词
   */
  tags?: string[];

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;

  /**
   * Modifiers
   * 定制选项
   */
  modifiers?: string;
}>;
