/**
 * Choose persons request data
 * 选择人员请求数据
 */
export type ChoosePersonsRQ = {
  /**
   * Person Id
   * 人员编号
   */
  personId: number;

  /**
   * Maximum items
   * 最大项数
   */
  maxItems?: number;
};
