import { PersonInfoKind } from "../../dto/personInfo/PersonInfoKind";

/**
 * Person duplicate test request data
 * 人员重复测试请求数据
 */
export type PersonDuplicateTestRQ = {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;

  /**
   * Name
   * 名称 / 姓名
   */
  name?: string;

  /**
   * Info kind
   * 信息类型
   */
  infoKind?: PersonInfoKind;

  /**
   * Info identifier
   * 信息标识
   */
  identifier?: string;

  /**
   * Address
   * 地址
   */
  address?: string;

  /**
   * Assigned id
   * 分配编号
   */
  assignedId?: string;
};
