import { ListType } from "@etsoo/shared";
import { OrderKind } from "../order/OrderKind";
import { FinanceTransactionKind } from "./FinanceTransactionKind";

/**
 * Finance transaction view data
 * 财务交易浏览数据
 */
export type FinanceTransactionViewData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
   */
  kind: FinanceTransactionKind;

  /**
   * Account
   * 账户
   */
  account: string;

  /**
   * Account id
   * 账号编号
   */
  accountId: number;

  /**
   * Title
   * 主题
   */
  title: string;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Amount
   * 金额
   */
  amount: number;

  /**
   * Reference id
   * 参考编号
   */
  referenceId?: string;

  /**
   * Order id related
   * 关联的订单/采购编号
   */
  orderId?: number;

  /**
   * Order kind
   * 订单类型
   */
  orderKind?: OrderKind;

  /**
   * Order title
   * 订单标题
   */
  orderTitle?: string;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;

  /**
   * Happen date
   * 发生日期
   */
  happenDate?: Date | string;

  /**
   * Author id
   * 作者编号
   */
  authorId: number;

  /**
   * Author name
   * 作者姓名
   */
  authorName: string;

  /**
   * Offset id
   * 冲减编号
   */
  offsetId?: number;

  /**
   * Offset source id
   * 冲减源编号
   */
  offsetSourceId?: number;

  /**
   * Inner referred items
   * 内部引用的项目
   */
  innerRefs?: ListType[];
};
