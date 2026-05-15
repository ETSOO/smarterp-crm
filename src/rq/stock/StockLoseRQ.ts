import { StockItem } from "../../dto/stock/StockItem";

/**
 * Stock loss request data
 * 报损请求数据
 */
export type StockLoseRQ = {
  /**
   * Organization location id
   * 机构位置编号
   */
  locationId: number;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Items
   * 项目
   */
  items: StockItem[];
};
