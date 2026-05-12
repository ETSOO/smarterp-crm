import { OrderKind } from "./OrderKind";

/**
 * Order duplicate test data
 * 订单重复测试数据
 */
export type OrderDuplicateTestData = {
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
