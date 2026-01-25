import { PersonInfoItem } from "../../dto/personInfo/PersonInfoItem";

/**
 * Person info create request data
 * 人员信息创建请求数据
 */
export type PersonInfoCreateRQ = {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Items
   * 项目
   */
  items: PersonInfoItem[];
};
