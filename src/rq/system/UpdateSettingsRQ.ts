import { CustomerType } from "../../dto/system/CustomerType";

/**
 * Update settings request data
 * 更新设置请求数据
 */
export interface UpdateSettingsRQ {
  /**
   * Changed fields
   * 已更改的字段
   */
  changedFields?: Exclude<keyof this, "changedFields">[];

  /**
   * Main customer type
   * 主要的客户类型
   */
  mainCustomerType?: CustomerType;

  /**
   * Currencies
   * 币种
   */
  currencies?: string[];

  /**
   * Supplier currencies
   * 供应商币种
   */
  supplierCurrencies?: string[];

  /**
   * Cultures
   * 文化
   */
  cultures?: string[];

  /**
   * Whether has inventory management
   * 是否有库存管理
   */
  hasInventory?: boolean;
}
