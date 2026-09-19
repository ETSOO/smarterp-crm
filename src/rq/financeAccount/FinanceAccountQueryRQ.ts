import { FinanceAccountListRQ } from "./FinanceAccountListRQ";

/**
 * Finance account query request data
 * 财务账户查询请求数据
 */
export type FinanceAccountQueryRQ = FinanceAccountListRQ & {
  /**
   * Times start
   * 次数开始
   */
  timesStart?: number;

  /**
   * Times end
   * 次数结束
   */
  timesEnd?: number;
};
