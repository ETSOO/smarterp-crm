import { StockListRQ } from "./StockListRQ";

/**
 * Stock query request
 * 库存查询请求
 */
export type StockQueryRQ = StockListRQ & {
  /**
   * Total qty start
   * 总数量开始
   */
  totalQtyStart?: number;

  /**
   * Total qty end
   * 总数量结束
   */
  totalQtyEnd?: number;

  /**
   * Total qty end
   * Creation start
   * 登记日期开始
   */
  creationStart?: Date | string;

  /**
   * Creation end
   * 登记日期结束
   */
  creationEnd?: Date | string;
};
