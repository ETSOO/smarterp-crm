import { EntityStatus } from "@etsoo/appscript";
import { FinanceTransactionItem } from "../financeTransaction/FinanceTransactionItem";
import { FinanceAccountKind } from "./FinanceAccountKind";

/*
Finance account view data
财务账户浏览数据
*/
export type FinanceAccountViewData = {
  /*
  Id
  编号
  */
  id: number;

  /*
  Owern person Id
  所有人人员编号
  */
  personId: number;

  /*
  Owner person name
  所有者名称
  */
  personName: string;

  /*
  Kind
  类型
  */
  kind: FinanceAccountKind;

  /*
  Bank name
  银行名称
  */
  bank: string;

  /*
  Currency
  币种
  */
  currency: string;

  /*
  Account number
  账号
  */
  accountNumber: string;

  /*
  SWIFT data
  SWIFT 数据
  */
  swift: string;

  /*
  Description
  描述
  */
  description: string;

  /*
  Balance
  余额
  */
  balance: number;

  /*
  Status
  状态
  */
  status: EntityStatus;

  /*
  Expiry
  过期时间
  */
  expiry: Date | string;

  /*
  Creation
  登记时间
  */
  creation: Date | string;

  /*
  Product id
  产品编号
  */
  productId: number;

  /*
  Product name
  产品名称
  */
  productName: string;

  /*
  Refresh time
  刷新时间
  */
  refreshTime: Date | string;

  /*
  Transactions
  交易项
  */
  transactions: FinanceTransactionItem[];
};
