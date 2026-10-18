import { BaseApi, IApi, IApp, IdResultPayload } from "@etsoo/appscript";
import { FinanceTransactionAdjustRQ } from "./rq/financeTransaction/FinanceTransactionAdjustRQ";
import { FinanceTransactionOffsetRQ } from "./rq/financeTransaction/FinanceTransactionOffsetRQ";
import { FinanceTransactionTransferRQ } from "./rq/financeTransaction/FinanceTransactionTransferRQ";
import { FinanceTransactionPayOrderRQ } from "./rq/financeTransaction/FinanceTransactionPayOrderRQ";
import { FinanceTransactionPayPORQ } from "./rq/financeTransaction/FinanceTransactionPayPORQ";

/**
 * Finance transaction API
 */
export class FinanceTransactionApi extends BaseApi {
  private key = "FinanceTransaction";

  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super(app, api);
  }

  /**
   * Adjust finance transaction
   * 调整财务交易
   * @param rq Adjust request data
   * @param payload Optional payload
   * @returns Result of the adjustment
   */
  adjust(rq: FinanceTransactionAdjustRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.key}/Adjust`, rq, payload);
  }

  /**
   * Offset
   * 冲销
   * @param rq Offset request data
   * @param payload Optional payload
   * @returns Result of the offset
   */
  offset(rq: FinanceTransactionOffsetRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.key}/Offset`, rq, payload);
  }

  /**
   * Pay order
   * 订单付款
   * @param rq Pay order request data
   * @param payload Optional payload
   * @returns Result of the payment
   */
  payOrder(rq: FinanceTransactionPayOrderRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.key}/PayOrder`, rq, payload);
  }

  /**
   * Pay PO
   * 采购订单付款
   * @param rq Pay PO request data
   * @param payload Optional payload
   * @returns Result of the payment
   */
  payPO(rq: FinanceTransactionPayPORQ, payload?: IdResultPayload) {
    return this.api.post(`${this.key}/PayPO`, rq, payload);
  }

  /**
   * Transfer
   * 转账
   * @param rq Transfer request data
   * @param payload Optional payload
   * @returns Result of the transfer
   */
  transfer(rq: FinanceTransactionTransferRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.key}/Transfer`, rq, payload);
  }
}
