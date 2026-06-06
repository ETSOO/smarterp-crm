/**
 * Asset data
 * 资产数据
 */
export type AssetData = {
  /**
   * Whether to notify the owner
   * 是否通知所有者
   */
  noticeOwner?: boolean;

  /**
   * Check interval minutes
   * 检查间隔分钟
   */
  intervalMinutes?: number;

  /**
   * Last error
   * 上次错误
   */
  lastError?: string;
};
