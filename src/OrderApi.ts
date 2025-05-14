import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { OrderListRQ } from "./rq/order/OrderListRQ";
import { OrderListData } from "./dto/order/OrderListData";
import { OrderQueryRQ } from "./rq/order/OrderQueryRQ";
import { OrderQueryData } from "./dto/order/OrderQueryData";

/**
 * Order API
 */
export class OrderApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Order", app, api);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: OrderListRQ, payload?: IApiPayload<OrderListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: OrderQueryRQ, payload?: IApiPayload<OrderQueryData[]>) {
    return this.queryBase(rq, payload);
  }
}
