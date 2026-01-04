import { EntityStatus } from "@etsoo/appscript";
import { PersonInfoUpdateItem } from "../person/PersonInfoUpdateItem";

/**
 * Supplier update read data
 * 更新供应商读取数据
 */
export type SupplierUpdateReadData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Is legal person (enterprise)
   * 是否为法人（企业）
   */
  isLegalPerson: boolean;

  /**
   * Name
   * 名称 / 姓名
   */
  name: string;

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
   * Infos
   * 信息项
   */
  infos: PersonInfoUpdateItem[];

  /**
   * Status
   * 状况
   */
  status: EntityStatus;
};
