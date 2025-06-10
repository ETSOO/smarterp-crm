import { QueryRQ } from "@etsoo/appscript";
import { FeatureTagKind } from "../../dto/tag/FeatureTagKind";

/**
 * Query tag request data
 * 查询标签请求数据
 */
export type TagQueryRQ = QueryRQ & {
  /**
   * Kind
   * 类型
   */
  kind?: FeatureTagKind;
};
