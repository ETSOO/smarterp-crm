import { ICrmApp } from "../CrmApp";
import { ProductDuplicateTestData } from "../dto/product/ProductDuplicateTestData";
import { ProductInventoryWay } from "../dto/product/ProductInventoryWay";
import { ProductListData } from "../dto/product/ProductListData";
import { ProductScope } from "../dto/product/ProductScope";
import { ProductUsage } from "../dto/product/ProductUsage";
import { ProductCategoryDuplicateTestData } from "../dto/productCategory/ProductCategoryDuplicateTestData";

/**
 * Product utils
 * 产品工具类
 */
export namespace ProductUtils {
  /**
   * Get duplicate check list item label
   * @param crm CRM app
   */
  export const getCategoryDuplicateLabel =
    () => (item: ProductCategoryDuplicateTestData) => {
      return `${item.names.join(" -> ")} (${item.id})`;
    };

  /**
   * Get list label function
   * 获取列表标签函数
   * @param crm CRM app
   */
  export const getListLabel = () => (data: ProductListData) => {
    if (data.assignedId) return `${data.assignedId} - ${data.name}`;
    return data.name;
  };
}

/**
 * Product
 * 产品
 */
export class Product {
  constructor(private crm: ICrmApp) {}

  /**
   * Duplicate result item label
   * @param item Item
   * @returns Label
   */
  duplicateLabel(item: ProductDuplicateTestData) {
    return (
      item.name +
      " (" +
      item.id +
      (item.assignedId ? ", " + item.assignedId : "") +
      ")"
    );
  }

  /**
   * Get inventory way label
   * 获取库存方式标签
   * @param inventoryWay Inventory way
   */
  getInventoryWay(inventoryWay?: ProductInventoryWay) {
    if (inventoryWay == null) return undefined;
    const key = ProductInventoryWay[inventoryWay];
    return this.crm.app.get("inventoryWay" + key) ?? key;
  }

  /**
   * Get inventory way list
   * 获取库存方式列表
   */
  getInventoryWays() {
    return this.crm.app.getEnumList(ProductInventoryWay, "inventoryWay");
  }

  /**
   * Get sale scope label
   * 获取销售范围标签
   * @param scope Scope
   */
  getScope(scope?: ProductScope) {
    if (scope == null) return undefined;
    const key = ProductScope[scope];
    return this.crm.app.get("scope" + key) ?? key;
  }

  /**
   * Get sale scope list
   * 获取销售范围列表
   */
  getScopes() {
    return this.crm.app.getEnumList(ProductScope, "scope");
  }

  /**
   * Get usage label
   * 获取用途标签
   * @param usage Usage
   */
  getUsage(usage?: ProductUsage) {
    if (usage == null) return undefined;
    const key = ProductUsage[usage];
    return this.crm.app.get("productUsage" + key) ?? key;
  }

  /**
   * Get usage list
   * 获取用途列表
   */
  getUsages() {
    return this.crm.app.getEnumList(ProductUsage, "productUsage");
  }
}
