import { PersonRelationType } from "./PersonRelationType";

/**
 * Person contact list item
 * 人员联系人列表项目
 */
export type PersonContactItem = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Name
   * 姓名
   */
  name: string;

  /**
   * Relation type
   * 关系类型
   */
  relationType: PersonRelationType;
};
