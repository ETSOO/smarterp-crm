import { AddressKind } from "./AddressItem";
import { AddressListItem } from "./AddressListItem";

/**
 * Address list data
 * 地址列表信息
 */
export type AddressListData = AddressListItem & {
  /**
   * ID
   * 编号
   */
  id: number;

  /**
   * Address kind
   * 地址类型
   */
  kind: AddressKind;

  /**
   * City
   * 城市
   */
  city: string;
};
