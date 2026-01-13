import { EntityStatus } from "@etsoo/appscript";
import { ProductInventoryWay } from "./ProductInventoryWay";
import { ProductPriceItem } from "./ProductPriceItem";
import { ProductScope } from "./ProductScope";
import { ProductUsage } from "./ProductUsage";

// 更新产品读取数据
export type ProductUpdateReadData = {
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
   * Price
   * 价格
   */
  price?: ProductPriceItem;

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
  status: EntityStatus;
};
