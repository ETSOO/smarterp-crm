/**
 * Permissions for the system
 * 系统权限
 */
export namespace Permissions {
  /**
   * Organization permissions (1)
   * 机构权限
   */
  export enum Org {
    All = 1000,

    updateSettings = 1001
  }

  /**
   * Department permissions (2)
   * 部门权限
   */
  export enum Dept {
    All = 2000
  }

  /**
   * User permissions (3)
   * 用户权限
   */
  export enum User {
    All = 3000,

    List = 3001,
    Query = 3002,
    View = 3003,
    Add = 3011,
    Edit = 3012,
    Delete = 3013,

    QueryContact = 3081,
    ViewContact = 3082,
    AddContact = 3083,
    EditContact = 3084,
    DeleteContact = 3085,

    QueryProfile = 3091,
    ViewProfile = 3092,
    AddProfile = 3093,
    EditProfile = 3094,
    DeleteProfile = 3095,
    AddAttachment = 3096,
    AddComment = 3097
  }

  /**
   * Customer permissions (6)
   * 客户权限
   */
  export enum Customer {
    All = 6000
  }

  /**
   * Supplier permissions (7)
   * 供应商权限
   */
  export enum Supplier {
    All = 7000
  }

  /**
   * Product permissions (8)
   * 产品权限
   */
  export enum Product {
    All = 8000
  }

  /**
   * Order permissions (9)
   * 订单权限
   */
  export enum Order {
    All = 9000
  }

  /**
   * Purchase order permissions (10)
   * 采购权限
   */
  export enum PO {
    All = 10000
  }

  /**
   * Inventory permissions (11)
   * 库存权限
   */
  export enum Inventory {
    All = 11000
  }

  /**
   * Finance permissions (18)
   * 财务权限
   */
  export enum Finance {
    All = 18000
  }
}
