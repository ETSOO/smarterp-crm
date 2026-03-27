import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { OrderDeliveryCreateRQ } from "./rq/orderDelivery/OrderDeliveryCreateRQ";
import { OrderDeliveryListData } from "./dto/orderDelivery/OrderDeliveryListData";
import { OrderDeliveryQueryData } from "./dto/orderDelivery/OrderDeliveryQueryData";
import { OrderDeliveryUpdateRQ } from "./rq/orderDelivery/OrderDeliveryUpdateRQ";
import { OrderDeliveryListRQ } from "./rq/orderDelivery/OrderDeliveryListRQ";
import { OrderDeliveryQueryRQ } from "./rq/orderDelivery/OrderDeliveryQueryRQ";
import { OrderDeliveryUpdateReadData } from "./dto/orderDelivery/OrderDeliveryUpdateReadData";

/**
 * Order Delivery API
 */
export class OrderDeliveryApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("OrderDelivery", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: OrderDeliveryCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(
    rq: OrderDeliveryListRQ,
    payload?: IApiPayload<OrderDeliveryListData[]>
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
    rq: OrderDeliveryQueryRQ,
    payload?: IApiPayload<OrderDeliveryQueryData[]>
  ) {
    return this.queryBase(rq, payload);
  }

  /**
   * Sort order deliveries
   * @param items Items to sort
   * @param payload Payload
   * @returns Result
   */
  sort(items: OrderDeliveryListData[], payload?: IApiPayload<number>) {
    return this.sortBase(items, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: OrderDeliveryUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<OrderDeliveryUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
