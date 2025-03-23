/**
 * Address kind
 * 地址类型
 */
enum AddressKind {
  Office = 1,
  Home = 2,
  Other = 9
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
