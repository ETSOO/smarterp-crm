import { StockKind } from "./StockKind";

/**
 * Stock list data
 * 库存列表数据
 */
export type StockListData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
   */
  kind: StockKind;

  /**
   * Title
   * 标题
   */
  title: string;
};
