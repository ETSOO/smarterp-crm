import { EntityStatus } from "@etsoo/appscript";

/**
 * Asset update read data
 * 更新资产读取数据
 */
export type AssetUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Person (owner) id
   * 所有者编号
   */
  personId: number;

  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * Serial number
   * 序列号
   */
  sn: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Expiry
   * 到期时间
   */
  expiry: string | Date;

  /**
   * Remaining times
   * 剩余次数
   */
  times?: number;

  /**
   * Remaining amount
   * 剩余金额
   */
  amount?: number;

  /**
   * Sensitive data
   * 敏感数据
   */
  sensitiveData?: string;

  /**
   * Health check URL
   * 健康检查网址
   */
  healthCheckUrl?: string;

  /**
   * JSON data
   * JSON 数据
   */
  data?: string;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;
};
