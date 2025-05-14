import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { CustomerListRQ } from "./rq/customer/CustomerListRQ";
import { CustomerListData } from "./dto/customer/CustomerListData";
import { CustomerQueryRQ } from "./rq/customer/CustomerQueryRQ";
import { CustomerQueryData } from "./dto/customer/CustomerQueryData";

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
}
