import { ProductUnit } from "@etsoo/appscript";

/**
 * Product list data
 * 产品列表数据
 */
export type ProductListData = {
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
   * Base unit
   * 基本单位
   */
  baseUnit: ProductUnit;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;
};
