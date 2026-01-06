import { EntityStatus } from "@etsoo/appscript";
import { CategoryItem } from "../CategoryItem";

/**
 * Supplier query data
 * 供应商查询数据
 */
export type SupplierQueryData = {
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
   */
  assignedId?: string;

  /**
   * Categories
   * 类目
   */
  categories?: CategoryItem[];

  /**
   * Preferred Name
   * 首选名称
   */
  preferredName?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Status
   */
  status: EntityStatus;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;
};
