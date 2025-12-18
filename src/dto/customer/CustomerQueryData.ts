import { CategoryItem } from "../person/CategoryItem";

/**
 * Customer query data
 * 客户查询数据
 */
export type CustomerQueryData = {
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
   * Creation
   * 登记时间
   */
  creation: Date | string;
};
