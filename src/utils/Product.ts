import { ICrmApp } from "../CrmApp";
import { ProductDuplicateTestData } from "../dto/product/ProductDuplicateTestData";
import { ProductInventoryWay } from "../dto/product/ProductInventoryWay";
import { ProductScope } from "../dto/product/ProductScope";
import { ProductUsage } from "../dto/product/ProductUsage";

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
   * Get inventory way list
   * 获取库存方式列表
   */
  getInventoryWays() {
    return this.crm.app.getEnumList(ProductInventoryWay, "inventoryWay");
  }

  /**
   * Get sale scope list
   * 获取销售范围列表
   */
  getScopes() {
    return this.crm.app.getEnumList(ProductScope, "scope");
  }

  /**
   * Get usage list
   * 获取用途列表
   */
  getUsages() {
    return this.crm.app.getEnumList(ProductUsage, "productUsage");
  }
}
