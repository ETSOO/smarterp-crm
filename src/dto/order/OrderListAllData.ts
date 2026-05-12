import { OrderKind } from "./OrderKind";

/**
 * Order / PO list data
 * 订单采购列表数据
 */
export type OrderListAllData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Kind
   * 类型
   */
  kind: OrderKind;
};
