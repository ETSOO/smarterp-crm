import { ListType } from "@etsoo/shared";
import { ICrmApp } from "../CrmApp";
import { ProductDuplicateTestData } from "../dto/product/ProductDuplicateTestData";
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
   * Get sale scope label
   * 获取销售范围标签
   * @param scope Scope
   */
  getScope(scope?: ProductScope): ListType[] | undefined {
    if (scope == null) return undefined;

    return this.crm.app.getEnumList(ProductScope, "productScope", (id) =>
      (id === ProductScope.None && scope === id) ||
      (id > ProductScope.None && (scope & id) === id)
        ? id
        : undefined
    );
  }

  /**
   * Get sale scope list
   * 获取销售范围列表
   */
  getScopes() {
    const hasInventory = this.crm.app.userData?.system?.hasInventory ?? false;
    return this.crm.app.getEnumList(ProductScope, "productScope", (id) =>
      id > ProductScope.None && (hasInventory || id < ProductScope.Production)
        ? id
        : undefined
    );
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
