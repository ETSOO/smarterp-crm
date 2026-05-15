import { StockItem } from "../../dto/stock/StockItem";

/**
 * Stock init request data
 * 库存初始化请求数据
 */
export type StockInitRQ = {
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
