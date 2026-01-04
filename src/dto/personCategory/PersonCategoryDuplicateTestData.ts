import { IdentityTypeFlags } from "@etsoo/appscript";

/**
 * Person category duplicate test data
 * 人员分类重复测试数据
 */
export type PersonCategoryDuplicateTestData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Names
   * 名称
   */
  names: string[];

  /**
   * Identity type
   * 识别类型
   */
  identityType: IdentityTypeFlags;
};
