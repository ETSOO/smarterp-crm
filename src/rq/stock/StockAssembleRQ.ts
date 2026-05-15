import { StockItem } from "../../dto/stock/StockItem";

/**
 * Stock assemble request data
 * 库存组装请求数据
 */
export type StockAssembleRQ = {
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
