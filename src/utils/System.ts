import { DataTypes, ListType } from "@etsoo/shared";
import { ICrmApp } from "../CrmApp";
import { AppModule } from "../dto/system/AppModule";
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

  /**
   * Get module label
   * 获取模块标签
   * @param module Module
   * @returns Module label
   */
  getModule(module?: AppModule) {
    if (module == null) return undefined;
    const key = AppModule[module];
    return this.getModuleLabel(key);
  }

  private getModuleLabel(key: string) {
    return (
      this.crm.app.get("m" + key) ??
      this.crm.app.get(key.formatInitial(false)) ??
      key
    );
  }

  /**
   * Get all modules
   * 获取所有模块
   */
  getModules() {
    const list: ListType[] = [];
    const keys = DataTypes.getEnumKeys(AppModule);
    for (const key of keys) {
      if (typeof AppModule[key] !== "number") continue;
      const id = AppModule[key];
      const label = this.getModuleLabel(key);
      list.push({ id, label });
    }
    return list;
  }
}
