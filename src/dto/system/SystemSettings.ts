import { CustomerType } from "./CustomerType";

/**
 * System settings
 * 系统设置
 */
export type SystemSettings = {
  /**
   * Organization person ID
   * 机构人员编号
   */
  personId: number;

  /**
   * Main customer type
   * 主要的客户类型
   */
  mainCustomerType: CustomerType;

  /**
   * Currencies
   * 币种
   */
  currencies: string[];

  /**
   * Supplier currencies
   * 供应商币种
   */
  supplierCurrencies: string[];

  /**
   * Cultures
   * 文化
   */
  cultures: string[];

  /**
   * Whether has inventory management
   * 是否有库存管理
   */
  hasInventory: boolean;
};
