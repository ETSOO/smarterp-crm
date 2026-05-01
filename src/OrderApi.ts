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
import { OrderDuplicateTestRQ } from "./rq/order/OrderDuplicateTestRQ";
import { OrderDuplicateTestData } from "./dto/order/OrderDuplicateTestData";
import { OrderViewData } from "./dto/order/OrderViewData";
import { OrderListAllRQ } from "./rq/order/OrderListAllRQ";
import { OrderListAllData } from "./dto/order/OrderListAllData";

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
   * Test for duplicate order or POs
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  duplicateTest(
    rq: OrderDuplicateTestRQ,
    payload?: IApiPayload<OrderDuplicateTestData[]>
  ) {
    return this.api.post(`${this.flag}/DuplicateTest`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(
    rq: Omit<OrderListRQ, "isOrder">,
    payload?: IApiPayload<OrderListData[]>
  ) {
    return this.listBase(rq, payload);
  }

  /**
   * List all (Orders & POs)
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  listAll(rq: OrderListAllRQ, payload?: IApiPayload<OrderListAllData[]>) {
    return this.api.post(`${this.flag}/ListAll`, rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(
    rq: Omit<OrderQueryRQ, "isOrder">,
    payload?: IApiPayload<OrderQueryData[]>
  ) {
    return this.queryBase({ ...rq, isOrder: true }, payload);
  }

  /**
   * Query all (Orders & POs)
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryAll(rq: OrderQueryRQ, payload?: IApiPayload<OrderQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<OrderViewData>) {
    return this.readBase(id, payload);
  }

  /**
   * Recalculate order
   * 重新计算订单
   * @param id Order ID
   * @param payload Payload
   * @returns Result
   */
  recalculate(id: number, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Recalculate/${id}`, undefined, payload);
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
