import { UpdateModel } from "@etsoo/appscript";
import { PersonInfoKind } from "../../dto/personInfo/PersonInfoKind";

/**
 * Person info update request data
 * 人员信息更新请求数据
 */
export type PersonInfoUpdateRQ = UpdateModel & {
  /**
   * Kind
   * 类型
   */
  kind: PersonInfoKind;

  /**
   * Identifier
   * 标识
   */
  identifier?: string;

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
   * Is subscribed or not
   * 是否订阅
   */
  subscribed?: boolean;
};
