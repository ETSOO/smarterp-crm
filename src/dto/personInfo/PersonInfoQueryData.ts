import { PersonInfoKind } from "./PersonInfoKind";

/**
 * Person info query data
 */
export type PersonInfoQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

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

  /**
   * Is verified or not
   * 是否验证
   */
  isVerified?: boolean;

  /**
   * Is subscribed or not
   * 是否订阅
   */
  subscribed?: boolean;

  /**
   * Created time
   * 创建时间
   */
  creation: Date | string;
};
