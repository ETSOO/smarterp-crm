import {
  BaseApi,
  IApi,
  IApiPayload,
  IApp,
  ResultPayload
} from "@etsoo/appscript";
import { SystemSettings } from "./dto/system/SystemSettings";
import { UpdateSettingsRQ } from "./rq/system/UpdateSettingsRQ";
import { PermissionItem } from "./dto/system/PermissionItem";

/**
 * System API
 * 系统接口
 */
export class SystemApi extends BaseApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super(app, api);
  }

  /**
   * Get permission items
   * 获取权限项
   * @param payload Payload
   * @returns Result
   */
  permissionItems(payload?: IApiPayload<PermissionItem[]>) {
    return this.api.get("System/PermissionItems", undefined, payload);
  }

  /**
   * Read system settings
   * 读取系统设置
   * @param payload Payload
   * @returns Result
   */
  readSettings(payload?: IApiPayload<SystemSettings>) {
    return this.api.get("System/ReadSettings", undefined, payload);
  }

  /**
   * Update system settings
   * 更新系统设置
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateSettings(rq: UpdateSettingsRQ, payload?: ResultPayload) {
    return this.api.put("System/UpdateSettings", rq, payload);
  }
}
