import {
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
