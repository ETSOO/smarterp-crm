import { QueryRQ } from "@etsoo/appscript";
import { AddressKind } from "../../dto/personAddress/AddressItem";

/**
 * Address list request data
 * 地址列表请求数据
 */
export type AddressListRQ = QueryRQ & {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Address kind
   * 地址类型
   */
  kind?: AddressKind;

  /**
   * Place id
   * 地址编号
   */
  placeId?: string;
};
