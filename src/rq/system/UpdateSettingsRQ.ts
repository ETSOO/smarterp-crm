import { SystemSettings } from "../../dto/system/SystemSettings";

/**
 * Update settings request data
 * 更新设置请求数据
 */
export interface UpdateSettingsRQ extends Partial<
  Omit<SystemSettings, "personId">
> {
  /**
   * Changed fields
   * 已更改的字段
   */
  changedFields?: Exclude<keyof this, "changedFields">[];
}
