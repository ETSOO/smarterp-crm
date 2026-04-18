import { EntityStatus } from "@etsoo/appscript";

/**
 * Asset view data
 * 资产浏览数据
 */
export type AssetViewData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Person name
   * 人员名称
   */
  personName: string;

  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Product name
   * 产品名称
   */
  productName: string;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId?: number;

  /**
   * Supplier name
   * 供应商名称
   */
  supplierName?: string;

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
  expiry: Date | string;

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
   * Health check schedule
   * 健康检查计划
   */
  healthCheckSchedule?: Date | string;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Creation time
   * 登记时间
   */
  creation: Date | string;
};
