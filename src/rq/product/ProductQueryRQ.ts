import { ProductScope } from "../../dto/product/ProductScope";
import { ProductListRQ } from "./ProductListRQ";

/**
 * Product query request data
 * 产品查询请求数据
 */
export type ProductQueryRQ = ProductListRQ & {
  /**
   * Currency
   * 币种
   */
  currency?: string;

  /**
   * Sale scope
   * 销售范围
   */
  scope?: ProductScope;

  /**
   * Unit id
   * 单位编号
   */
  unitId?: number;
};
