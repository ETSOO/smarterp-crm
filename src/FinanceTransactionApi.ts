import { BaseApi, IApi, IApp, IdResultPayload } from "@etsoo/appscript";
import { FinanceTransactionAdjustRQ } from "./rq/financeTransaction/FinanceTransactionAdjustRQ";
import { FinanceTransactionOffsetRQ } from "./rq/financeTransaction/FinanceTransactionOffsetRQ";

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
   * Offset finance transaction
   * 冲销财务交易
   * @param rq Offset request data
   * @param payload Optional payload
   * @returns Result of the offset
   */
  offset(rq: FinanceTransactionOffsetRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.key}/Offset`, rq, payload);
  }
}
