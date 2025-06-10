import { FeatureTagKind } from "./FeatureTagKind";

/**
 * Tag query data
 * 标签查询数据
 */
export type TagQueryData = {
  /**
   * Tag id
   * 标签ID
   */
  id: number;

  /**
   * Kind
   * 类型
   */
  kind: FeatureTagKind;

  /**
   * Tag
   * 标签
   */
  tag: string;

  /**
   * Total
   * 数量
   */
  total: number;
};
