import { ProductUnitItem } from "../../dto/product/ProductUnitItem";

/**
 * Product unit update request data
 * 产品单位更新请求数据
 */
export type ProductUnitUpdateRQ = {
  /**
   * Removed ids
   * 移除的编号
   */
  removedIds?: number[];

  /**
   * Items
   * 项目
   */
  items: ProductUnitItem[];
};
