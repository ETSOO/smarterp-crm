/**
 * Product BOM item
 * 产品物料清单项
 */
export type ProductBomItem = {
  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Qty
   * 数量
   */
  qty: number;
};

/**
 * Product BOM name item
 * 产品物料清单名称项
 */
export type ProductBomNameItem = ProductBomItem & {
  /**
   * Name
   * 名称
   */
  name: string;
};
