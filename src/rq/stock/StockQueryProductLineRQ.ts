import { QueryRQ } from "@etsoo/appscript";
import { StockKind } from "../../dto/stock/StockKind";

/**
 * Stock query product line request data
 * 库存查询产品行请求数据
 */
export type StockQueryProductLineRQ = QueryRQ & {
  /**
   * Product id
   * 产品编号
   */
  productId: number;

  /**
   * Stock kind
   * 库存类型
   */
  stockKind?: StockKind;

  /**
   * Location id
   * 仓库地址编号
   */
  locationId?: number;

  /**
   * Qty start
   * 开始数量
   */
  qtyStart?: number;

  /**
   * Qty end
   * 结束数量
   */
  qtyEnd?: number;

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
