import { PersonListItem } from "./PersonListItem";

/**
 * Choose persons data
 * 选择人员数据
 */
export type ChoosePersonsData = {
  /**
   * Users
   * 用户
   */
  users: PersonListItem[];

  /**
   * Contacts
   * 联系人
   */
  contacts: PersonListItem[];
};
