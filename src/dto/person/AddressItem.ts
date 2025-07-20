/**
 * Address kind
 * 地址类型
 */
export enum AddressKind {
  Office = 1,
  Home = 2,
  Other = 9
}

/**
 * Map API provider
 * 地图提供商
 */
export enum ApiProvider {
  Google = 0,
  Baidu = 1
}

/**
 * Address item
 * 地址项
 */
export type AddressItem = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
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
