import {
  FinanceAccountItem,
  FinanceAccountItemWithBalance
} from "../financeAccount/FinanceAccountItem";
import { ProductBomItem } from "../product/ProductBomItem";

/**
 * Order main data
 * 订单主数据
 */
export type FinanceTransactionOrderViewMainData = {
  /**
   * Order ID
   * 订单编号
   */
  id: number;

  /**
   * Customer id
   * 客户编号
   */
  customerId: number;

  /**
   * Customer name
   * 客户姓名
   */
  customerName: string;

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
   * Payment method
   * 付款方式
   */
  payment?: string;

  /**
   * Payment instruction
   * 付款说明
   */
  paymentInstruction?: string;

  /**
   * Currency
   * 币种
   */
  currency: string;

  /**
   * Total payable
   * 应付总额
   */
  totalPayable: number;

  /**
   * Paid amount
   * 已付款金额
   */
  paidAmount: number;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;

  /**
   * Products
   * 产品
   */
  products: ProductBomItem[];
};

/**
 * Finance transaction view order data
 * 财务交易浏览订单数据
 */
export type FinanceTransactionViewOrderData = {
  /**
   * Order
   * 订单
   */
  order: FinanceTransactionOrderViewMainData;

  /**
   * Organization accounts
   * 组织账户
   */
  orgAccounts: FinanceAccountItem[];

  /**
   * Accounts
   * 账户
   */
  accounts: FinanceAccountItemWithBalance[];
};
