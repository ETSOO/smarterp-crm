import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { FinanceTransactionAdjustRQ } from "./rq/financeTransaction/FinanceTransactionAdjustRQ";
import { FinanceTransactionOffsetRQ } from "./rq/financeTransaction/FinanceTransactionOffsetRQ";
import { FinanceTransactionTransferRQ } from "./rq/financeTransaction/FinanceTransactionTransferRQ";
import { FinanceTransactionPayOrderRQ } from "./rq/financeTransaction/FinanceTransactionPayOrderRQ";
import { FinanceTransactionPayPORQ } from "./rq/financeTransaction/FinanceTransactionPayPORQ";
import { FinanceTransactionViewOrderData } from "./dto/financeTransaction/FinanceTransactionViewOrderData";
import { FinanceTransactionViewPOData } from "./dto/financeTransaction/FinanceTransactionViewPOData";
import { FinanceTransactionQueryRQ } from "./rq/financeTransaction/FinanceTransactionQueryRQ";
import { FinanceTransactionQueryData } from "./dto/financeTransaction/FinanceTransactionQueryData";
import { FinanceTransactionListRQ } from "./rq/financeTransaction/FinanceTransactionListRQ";
import { FinanceTransactionListData } from "./dto/financeTransaction/FinanceTransactionListData";
import { FinanceTransactionViewData } from "./dto/financeTransaction/FinanceTransactionViewData";

/**
 * Finance transaction API
 */
export class FinanceTransactionApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("FinanceTransaction", app, api);
  }

  /**
   * Adjust finance transaction
   * 调整财务交易
   * @param rq Adjust request data
   * @param payload Optional payload
   * @returns Result of the adjustment
   */
  adjust(rq: FinanceTransactionAdjustRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/Adjust`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(
    rq: FinanceTransactionListRQ,
    payload?: IApiPayload<FinanceTransactionListData[]>
  ) {
    return this.listBase(rq, payload);
  }

  /**
   * Offset
   * 冲销
   * @param rq Offset request data
   * @param payload Optional payload
   * @returns Result of the offset
   */
  offset(rq: FinanceTransactionOffsetRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/Offset`, rq, payload);
  }

  /**
   * Pay order
   * 订单付款
   * @param rq Pay order request data
   * @param payload Optional payload
   * @returns Result of the payment
   */
  payOrder(rq: FinanceTransactionPayOrderRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/PayOrder`, rq, payload);
  }

  /**
   * Pay PO
   * 采购订单付款
   * @param rq Pay PO request data
   * @param payload Optional payload
   * @returns Result of the payment
   */
  payPO(rq: FinanceTransactionPayPORQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/PayPO`, rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(
    rq: FinanceTransactionQueryRQ,
    payload?: IApiPayload<FinanceTransactionQueryData[]>
  ) {
    return this.queryBase(rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<FinanceTransactionViewData>) {
    return this.readBase(id, payload);
  }

  /**
   * Transfer
   * 转账
   * @param rq Transfer request data
   * @param payload Optional payload
   * @returns Result of the transfer
   */
  transfer(rq: FinanceTransactionTransferRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/Transfer`, rq, payload);
  }

  /**
   * View order for collection
   * 浏览订单用于收款
   * @param id Id
   * @param payload Payload
   * @returns Data
   */
  viewOrder(
    id: number,
    payload?: IApiPayload<FinanceTransactionViewOrderData>
  ) {
    return this.api.get(`${this.flag}/ViewOrder/${id}`, undefined, payload);
  }

  /**
   * View purchase order for payment
   * 浏览采购订单用于付款
   * @param id Id
   * @param payload Payload
   * @returns Data
   */
  viewPO(id: number, payload?: IApiPayload<FinanceTransactionViewPOData>) {
    return this.api.get(`${this.flag}/ViewPO/${id}`, undefined, payload);
  }
}
