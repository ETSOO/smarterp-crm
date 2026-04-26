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
   * Unit id
   * 单位编号
   */
  unitId?: number;
};
