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
   * Is location or not
   * 是否为位置
   */
  isLocation?: boolean;

  /**
   * Parent id
   * 父级编号
   */
  parentId?: number;

  /**
   * Place id
   * 地址编号
   */
  placeId?: string;

  /**
   * Include owner's addresses or not
   * 是否包含所有者的地址
   */
  includeOwner?: boolean;
};
