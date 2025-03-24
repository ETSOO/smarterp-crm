import { PersonProfileListRQ } from "./PersonProfileListRQ";

/**
 * Person profile query request data
 * 人员档案查询请求数据
 */
export type PersonProfileQueryRQ = PersonProfileListRQ & {
  /**
   * Location
   * 地点
   */
  location?: string;
};
