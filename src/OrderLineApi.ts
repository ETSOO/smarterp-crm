import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload,
  ResultPayload
} from "@etsoo/appscript";
import { OrderLineCreateRQ } from "./rq/orderline/OrderLineCreateRQ";
import { OrderLineListData } from "./dto/orderline/OrderLineListData";
import { OrderLineQueryData } from "./dto/orderline/OrderLineQueryData";
import { OrderLineUpdateRQ } from "./rq/orderline/OrderLineUpdateRQ";
import { OrderLineListRQ } from "./rq/orderline/OrderLineListRQ";
import { OrderLineQueryRQ } from "./rq/orderline/OrderLineQueryRQ";
import { OrderLineUpdateReadData } from "./dto/orderline/OrderLineUpdateReadData";
import { OrderLineStartRQ } from "./rq/orderline/OrderLineStartRQ";
import { OrderLineQueryAllRQ } from "./rq/orderline/OrderLineQueryAllRQ";
import { OrderLineCompleteRQ } from "./rq/orderline/OrderLineCompleteRQ";
import { OrderLineQueryAllData } from "./dto/orderline/OrderLineQueryAllData";
import { OrderLineViewData } from "./dto/orderline/OrderLineViewData";
import { OrderLineQueryAssetRQ } from "./rq/orderline/OrderLineQueryAssetRQ";
import { OrderLineQueryAssetData } from "./dto/orderline/OrderLineQueryAssetData";

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
   * Complete order line
   * 完成订单行
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  complete(rq: OrderLineCompleteRQ, payload?: ResultPayload) {
    return this.api.put(`${this.flag}/Complete`, rq, payload);
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
   * Query all order line info
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryAll(
    rq: OrderLineQueryAllRQ,
    payload?: IApiPayload<OrderLineQueryAllData[]>
  ) {
    return this.api.post(`${this.flag}/QueryAll`, rq, payload);
  }

  /**
   * Query order line asset info
   * 查询订单行资产信息
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryAsset(
    rq: OrderLineQueryAssetRQ,
    payload?: IApiPayload<OrderLineQueryAssetData[]>
  ) {
    return this.api.post(`${this.flag}/QueryAsset`, rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<OrderLineViewData>) {
    return this.readBase(id, payload);
  }

  /**
   * Rollback the order line
   * 回滚订单行
   * @param id Order line id
   * @param payload Payload
   * @returns Result
   */
  rollback(id: number, payload?: ResultPayload) {
    return this.api.put(`${this.flag}/Rollback/${id}`, undefined, payload);
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
