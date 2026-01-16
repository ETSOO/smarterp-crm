import {
  BaseApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload,
  ResultPayload
} from "@etsoo/appscript";
import { SystemSettings } from "./dto/system/SystemSettings";
import { UpdateSettingsRQ } from "./rq/system/UpdateSettingsRQ";
import { PermissionItem } from "./dto/system/PermissionItem";
import { CustomCultureItem } from "./dto/system/CustomCultureItem";
import { ReadCultureRQ } from "./rq/system/ReadCultureRQ";
import { UpdateCultureRQ } from "./rq/system/UpdateCultureRQ";

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
   * Read culture
   * 读取文化
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  readCulture(rq: ReadCultureRQ, payload?: IApiPayload<CustomCultureItem>) {
    return this.api.post("System/ReadCulture", rq, payload);
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
   * Update custom culture
   * 更新自定义文化
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateCulture(rq: UpdateCultureRQ, payload?: IdResultPayload) {
    return this.api.put("System/UpdateCulture", rq, payload);
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
