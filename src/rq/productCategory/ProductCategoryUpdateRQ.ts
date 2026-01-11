import { DataTypes } from "@etsoo/shared";
import { ProductCategoryCreateRQ } from "./ProductCategoryCreateRQ";

/**
 * Product category update request data
 * 人员分类更新请求数据
 */
export type ProductCategoryUpdateRQ =
  DataTypes.EditType<ProductCategoryCreateRQ>;
