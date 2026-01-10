import { ProductUnit } from "@etsoo/appscript";

/**
 * Product unit item
 * 产品单位项
 */
export type ProductUnitItem = {
  /**
   * Id
   * 编号
   */
  id?: number;

  /**
   * Base unit
   * 基本单位
   */
  baseUnit: ProductUnit;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Foreign name
   * 外文名称
   */
  foreignName?: string;

  /**
   * Is system item
   * 是否为系统项
   */
  isSystem: boolean;
};
