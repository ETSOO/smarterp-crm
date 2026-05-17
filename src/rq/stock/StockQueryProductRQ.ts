import { QueryRQ } from "@etsoo/appscript";
import { ProductScope } from "../../dto/product/ProductScope";
import { ProductUsage } from "../../dto/product/ProductUsage";

/**
 * Stock query product request data
 * 库存查询产品请求数据
 */
export type StockQueryProductRQ = QueryRQ & {
  /**
   * Location id
   * 位置编号
   */
  locationId?: number;

  /**
   * Scope
   * 范围
   */
  scope?: ProductScope;

  /**
   * Usage
   * 用途
   */
  usage?: ProductUsage;

  /**
   * Category
   * 所属分类
   */
  categoryId?: number;

  /**
   * Category and all descendant category ids
   * 所属分类及所有下级子类编号
   */
  categoryIdAll?: number;

  /**
   * Categories
   * 所属多个分类
   */
  categoryIds?: number[];

  /**
   * Name
   * 名称
   */
  name?: string;

  /**
   * Assigned id start
   * 分配的编号开始
   */
  assignedIdStart?: string;

  /**
   * Unit id
   * 单位编号
   */
  unitId?: number;

  /**
   * Has stock qty. or not
   * 是否有库存数量
   */
  hasStockQty?: boolean;
};
