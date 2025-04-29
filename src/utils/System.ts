import { ICrmApp } from "../CrmApp";
import { CustomerType } from "../dto/system/CustomerType";

/**
 * System
 * 系统
 */
export class System {
  constructor(private crm: ICrmApp) {}

  /**
   * Get customer type label
   * 获取客户类型标签
   * @param type Customer type
   * @returns Customer type label
   */
  getCustomerType(type?: CustomerType) {
    if (type == null) return undefined;
    const key = CustomerType[type];
    return this.crm.app.get("customerType" + key) ?? key;
  }

  /**
   * Get customer types
   * 获取客户类型
   */
  getCustomerTypes() {
    return this.crm.app.getEnumList(CustomerType, "customerType");
  }
}
