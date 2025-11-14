import { IdentityTypeFlags } from "@etsoo/appscript";

/**
 * Person duplicate test data
 * 人员重复测试数据
 */
export type PersonDuplicateTestData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Name
   * 名称 / 姓名
   */
  name: string;

  /**
   * Identity type
   * 识别类型
   */
  identityType: IdentityTypeFlags;
};
