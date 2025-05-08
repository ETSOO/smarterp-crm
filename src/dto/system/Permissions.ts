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
    All = 100,

    updateSettings = 101
  }

  /**
   * User permissions (3)
   * 用户权限
   */
  export enum User {
    All = 300,

    List = 301,
    Query = 302,
    View = 303,
    Add = 311,
    Edit = 312,
    Delete = 313,

    QueryContact = 381,
    ViewContact = 382,
    AddContact = 383,
    EditContact = 384,
    DeleteContact = 385,

    QueryProfile = 391,
    ViewProfile = 392,
    AddProfile = 393,
    EditProfile = 394,
    DeleteProfile = 395,
    AddAttachment = 396,
    AddComment = 397
  }
}
