import { PersonInfoKind } from "./PersonInfoKind";

/**
 * Person info update item
 * 人员信息更新项
 */
export type PersonInfoUpdateItem = {
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
   * Is default or not
   * 是否默认
   */
  isDefault?: boolean;
};
