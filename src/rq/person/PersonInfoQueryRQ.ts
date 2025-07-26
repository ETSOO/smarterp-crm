import { QueryRQ } from "@etsoo/appscript";
import { PersonInfoKind } from "../../dto/person/PersonInfoKind";

/**
 * Person info query request data
 * 查询人员信息请求数据
 */
export type PersonInfoQueryRQ = QueryRQ & {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Kind
   * 类型
   */
  kind?: PersonInfoKind;

  /**
   * Is subscribed
   * 是否订阅
   */
  subscribed?: boolean;

  /**
   * Is default
   * 是否默认
   */
  isDefault?: boolean;

  /**
   * Is verified
   * 是否验证
   */
  isVerified?: boolean;
};
