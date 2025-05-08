import { IServiceUser } from "@etsoo/materialui";
import { SystemSettings } from "./dto/system/SystemSettings";

/**
 * CRM user interface
 * CRM 用户接口
 */
export interface CrmUser extends IServiceUser {
  /**
   * System settings
   * 系统设置
   */
  system?: SystemSettings;

  /**
   * Current user permission items
   * 当前用户权限项
   */
  permissionItems: number[];

  /**
   * Current user person ID
   * 当前用户人员编号
   */
  userPersonId: number;
}
