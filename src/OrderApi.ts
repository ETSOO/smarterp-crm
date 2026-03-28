import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { OrderListRQ } from "./rq/order/OrderListRQ";
import { OrderListData } from "./dto/order/OrderListData";
import { OrderQueryRQ } from "./rq/order/OrderQueryRQ";
import { OrderQueryData } from "./dto/order/OrderQueryData";
import { OrderCreateRQ } from "./rq/order/OrderCreateRQ";
import { OrderUpdateRQ } from "./rq/order/OrderUpdateRQ";
import { OrderUpdateReadData } from "./dto/order/OrderUpdateReadData";

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
   * Create order
   * 创建订单
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: OrderCreateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Create`, rq, payload);
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

  /**
   * Update order
   * 更新订单
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: OrderUpdateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Update`, rq, payload);
  }

  /**
   * Get order update info
   * 获取订单更新信息
   * @param id Order id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<OrderUpdateReadData>) {
    return this.api.get(`${this.flag}/UpdateRead/${id}`, undefined, payload);
  }
}
