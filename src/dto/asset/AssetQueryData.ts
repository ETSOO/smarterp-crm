import { EntityStatus } from "@etsoo/appscript";

/**
 * Asset query data
 * 资产查询数据
 */
export type AssetQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Product name
   * 产品名称
   */
  product: string;

  /**
   * Title
   * 标题
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
   * Status
   * 状况
   */
  status: EntityStatus;

  /**
   * Creation
   * 登记时间
   */
  creation: string | Date;
};
