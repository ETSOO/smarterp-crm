import {
  AppActionData,
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { CustomerListRQ } from "./rq/customer/CustomerListRQ";
import { CustomerListData } from "./dto/customer/CustomerListData";
import { CustomerQueryRQ } from "./rq/customer/CustomerQueryRQ";
import { CustomerQueryData } from "./dto/customer/CustomerQueryData";
import { CustomerUpdateRQ } from "./rq/customer/CustomerUpdateRQ";
import { CustomerUpdateReadData } from "./dto/customer/CustomerUpdateReadData";
import { CustomerCreateRQ } from "./rq/customer/CustomerCreateRQ";
import { CustomerReadForSaleData } from "./dto/customer/CustomerReadForSaleData";
import { CustomerReadForSaleRQ } from "./rq/customer/CustomerReadForSaleRQ";
import { DocumentActionRQ } from "./rq/DocumentActionRQ";

/**
 * Customer API
 */
export class CustomerApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Customer", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: CustomerCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * Document action data
   * 文档操作数据
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  documentAction(rq: DocumentActionRQ, payload?: IApiPayload<AppActionData>) {
    return this.api.post(`${this.flag}/DocumentAction`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: CustomerListRQ, payload?: IApiPayload<CustomerListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: CustomerQueryRQ, payload?: IApiPayload<CustomerQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Get customer info for sale
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  readForSale(
    rq: CustomerReadForSaleRQ,
    payload?: IApiPayload<CustomerReadForSaleData>
  ) {
    return this.api.post(`${this.flag}/ReadForSale`, rq, payload);
  }

  /**
   * Report action data
   * 报告操作数据
   * @param payload Payload
   * @returns Result
   */
  reportAction(payload?: IApiPayload<AppActionData>) {
    return this.api.get(`${this.flag}/ReportAction`, undefined, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: CustomerUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<CustomerUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
