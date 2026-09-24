import { StatusQueryRQ } from "@etsoo/appscript";
import { FinanceAccountKind } from "../../dto/financeAccount/FinanceAccountKind";

/**
 * Finance account list request data
 * 财务账户列表请求数据
 */
export type FinanceAccountListRQ = StatusQueryRQ & {
  /**
   * Person (owner) id
   * 人员（所有者）编号
   */
  personId?: number;

  /**
   * Kind
   * 类型
   */
  kind?: FinanceAccountKind;

  /**
   * Currency
   * 币种
   */
  currency?: string;

  /**
   * Product id
   * 产品编号
   */
  productId?: number;

  /**
   * Product id or default
   * 产品编号或默认值
   */
  productIdOrDefault?: number;
};
