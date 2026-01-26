import { AddressKind } from "./AddressItem";

/**
 * Address query data
 * 地址查询数据
 */
export type AddressQueryData = {
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
   * Name
   * 名称
   */
  name: string;

  /**
   * Formatted address
   * 格式化地址
   */
  formattedAddress: string;
};
