import { QueryRQ } from "@etsoo/appscript";
import { FeatureTagKind } from "../../dto/tag/FeatureTagKind";

/**
 * Tag list request data
 * 标签列表请求数据
 */
export type TagListRQ = QueryRQ & {
  /**
   * Kind
   * 类型
   */
  kind: FeatureTagKind;
};
