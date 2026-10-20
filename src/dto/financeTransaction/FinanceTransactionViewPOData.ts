import {
  FinanceAccountItem,
  FinanceAccountItemWithBalance
} from "../financeAccount/FinanceAccountItem";
import { ProductBomItem } from "../product/ProductBomItem";

/**
 * Purchase order main data
 * 采购订单主数据
 */
export type FinanceTransactionPOViewMainData = {
  /**
   * Order ID
   * 订单编号
   */
  id: number;

  /**
   * Supplier id
   * 供应商编号
   */
  supplierId: number;

  /**
   * Supplier name
   * 供应商姓名
   */
  supplierName: string;

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
   * Total amount to pay
   * 总金额
   */
  totalAmount: number;

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
 * Finance transaction view purchase order data
 * 财务交易浏览采购订单数据
 */
export type FinanceTransactionViewPOData = {
  /**
   * Purchase order
   * 采购订单
   */
  order: FinanceTransactionPOViewMainData;

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
