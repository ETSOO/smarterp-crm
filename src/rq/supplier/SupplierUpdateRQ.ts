import { EntityStatus } from "@etsoo/appscript";
import { DataTypes } from "@etsoo/shared";

/**
 * Update supplier request data
 * 更新供应商请求数据
 */
export type SupplierUpdateRQ = DataTypes.EditType<{
  /**
   * Id
   * 主键编号
   */
  id: number;

  /**
   * Is legal person (enterprise)
   * 是否为法人（企业）
   */
  isLegalPerson?: boolean;

  /**
   * Name
   * 名称 / 姓名
   */
  name?: string;

  /**
   * Preferred name
   * 首先名
   */
  preferredName?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * PIN
   * 身份证号码
   */
  pin?: string;

  /**
   * Birthday
   * 生日
   */
  birthday?: Date | string;

  /**
   * Categories
   * 类目
   */
  categories?: number[];

  /**
   * Keywords
   * 关键词
   */
  tags?: string[];

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;
}>;
