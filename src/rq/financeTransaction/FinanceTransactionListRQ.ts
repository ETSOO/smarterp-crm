import { QueryRQ } from "@etsoo/appscript";
import { FinanceTransactionKind } from "../../dto/financeTransaction/FinanceTransactionKind";

/**
 * Finance transaction list request data
 * 财务交易列表请求数据
 */
export type FinanceTransactionListRQ = QueryRQ & {
  /**
   * Person (owner) id
   * 人员（所有者）编号
   */
  personId?: number;

  /**
   * Currency
   * 币种
   */
  currency?: string;

  /**
   * Account id
   * 账号
   */
  accountId?: number;

  /**
   * Kind
   * 类型
   */
  kind?: FinanceTransactionKind;

  /**
   * Kinds
   * 类型列表
   */
  kinds?: FinanceTransactionKind[];

  /**
   * Order id
   * 订单编号
   */
  orderId?: number;

  /**
   * Inner Reference id
   * 内部引用编号
   */
  innerRef?: string;
};
