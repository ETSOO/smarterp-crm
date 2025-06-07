import { QueryRQ } from "@etsoo/appscript";
import { FeatureTagKind } from "../../dto/system/FeatureTagKind";

/**
 * Query tags request
 * 查询标签请求
 */
export type QueryTagRQ = QueryRQ & {
  kind?: FeatureTagKind;
};
