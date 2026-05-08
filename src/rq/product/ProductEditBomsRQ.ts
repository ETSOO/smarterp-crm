import { ProductBomItem } from "../../dto/product/ProductBomItem";

/**
 * Edit product BOMs request data
 * 编辑产品物料清单请求数据
 */
export type ProductEditBomsRQ = {
  /**
   * Parent product id
   * 父级产品编号
   */
  parentId: number;

  /**
   * Items
   * 项目
   */
  items: ProductBomItem[];
};
