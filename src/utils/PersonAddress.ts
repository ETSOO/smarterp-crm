import { ICrmApp } from "../CrmApp";
import { AddressKind } from "../dto/personAddress/AddressItem";
import { AddressListItem } from "../dto/personAddress/AddressListItem";

/**
 * Person Address
 * 人员地址
 */
export class PersonAddress {
  constructor(private crm: ICrmApp) {}

  /**
   * Get address kind
   * 获取地址类型
   * @param kind Address kind
   */
  getAddressKind(kind?: AddressKind) {
    if (kind == null) return undefined;
    const key = AddressKind[kind];
    return this.crm.app.get("addressKind" + key) ?? key;
  }

  /**
   * Get address kinds
   * 获取地址类型列表
   */
  getAddressKinds() {
    return this.crm.app.getEnumList(AddressKind, "addressKind");
  }

  /**
   * Get list label function
   * 获取列表标签函数
   * @param crm CRM app
   * @returns Get list label function
   */
  getListLabel = () => (data: AddressListItem) => {
    return data.parentName ? `${data.name} (${data.parentName})` : data.name;
  };
}
