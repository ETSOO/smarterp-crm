import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { FinanceAccountCreateRQ } from "./rq/financeAccount/FinanceAccountCreateRQ";
import { FinanceAccountListData } from "./dto/financeAccount/FinanceAccountListData";
import { FinanceAccountListRQ } from "./rq/financeAccount/FinanceAccountListRQ";
import { FinanceAccountQueryRQ } from "./rq/financeAccount/FinanceAccountQueryRQ";
import { FinanceAccountQueryData } from "./dto/financeAccount/FinanceAccountQueryData";
import { FinanceAccountUpdateReadData } from "./dto/financeAccount/FinanceAccountUpdateReadData";
import { FinanceAccountUpdateRQ } from "./rq/financeAccount/FinanceAccountUpdateRQ";
import { FinanceAccountCreateBulkRQ } from "./rq/financeAccount/FinanceAccountCreateBulkRQ";

/**
 * Finance account API
 */
export class FinanceAccountApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("FinanceAccount", app, api);
  }

  /**
   * Bulk create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  bulkCreate(rq: FinanceAccountCreateBulkRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/BulkCreate`, rq, payload);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: FinanceAccountCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * Delete
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  delete(id: number, payload?: IdResultPayload) {
    return this.deleteBase(id, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(
    rq: FinanceAccountListRQ,
    payload?: IApiPayload<FinanceAccountListData[]>
  ) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(
    rq: FinanceAccountQueryRQ,
    payload?: IApiPayload<FinanceAccountQueryData[]>
  ) {
    return this.queryBase(rq, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: FinanceAccountUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<FinanceAccountUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
