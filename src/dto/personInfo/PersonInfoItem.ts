import { PersonInfoKind } from "./PersonInfoKind";

/**
 * Person info item
 * 个人信息项
 */
export type PersonInfoItem = {
  /**
   * Kind
   * 类型
   */
  kind: PersonInfoKind;

  /**
   * Identifier
   * 标识
   */
  identifier: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Is default or not
   * 是否默认
   */
  isDefault?: boolean;
};
