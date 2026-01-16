import { CustomCultureKind } from "../../dto/system/CustomCultureKind";

/**
 * Update custom culture
 * 更新自定义文化
 */
export type UpdateCultureRQ = {
  /**
   * Related Id
   * 关联编号
   */
  id: number;

  /**
   * Culture
   * 文化
   */
  culture: string;

  /**
   * Kind
   * 类型
   */
  kind: CustomCultureKind;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Json data
   * JSON 数据
   */
  jsonData?: string;
};
