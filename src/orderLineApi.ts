import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { OrderLineCreateRQ } from "./rq/orderline/OrderLineCreateRQ";
import { OrderLineListData } from "./dto/orderline/OrderLineListData";
import { OrderLineQueryData } from "./dto/orderline/OrderLineQueryData";
import { OrderLineUpdateRQ } from "./rq/orderline/OrderLineUpdateRQ";
import { OrderLineListRQ } from "./rq/orderline/OrderLineListRQ";
import { OrderLineQueryRQ } from "./rq/orderline/OrderLineQueryRQ";
import { OrderLineUpdateReadData } from "./dto/orderline/OrderLineUpdateReadData";
import { OrderLineStartRQ } from "./rq/orderline/OrderLineStartRQ";

/**
 * OrderLine API
 */
export class OrderLineApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("OrderLine", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: OrderLineCreateRQ, payload?: IdResultPayload) {
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
  list(rq: OrderLineListRQ, payload?: IApiPayload<OrderLineListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: OrderLineQueryRQ, payload?: IApiPayload<OrderLineQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Start to execute order line
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  start(rq: OrderLineStartRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Start`, rq, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: OrderLineUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<OrderLineUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
