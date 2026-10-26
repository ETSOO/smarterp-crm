import { FinanceTransactionListRQ } from "./FinanceTransactionListRQ";

/**
 * Finance transaction query request data
 * 财务交易查询请求数据
 */
export type FinanceTransactionQueryRQ = FinanceTransactionListRQ & {
  /**
   * Creation start
   * 登记时间开始
   */
  creationStart?: Date | string;

  /**
   * Creation end
   * 登记时间结束
   */
  creationEnd?: Date | string;

  /**
   * Happen date start
   * 发生日期开始
   */
  happenDateStart?: Date | string;

  /**
   * Happen date end
   * 发生日期结束
   */
  happenDateEnd?: Date | string;
};
