import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { OrderPaymentCreateRQ } from "./rq/orderPayment/OrderPaymentCreateRQ";
import { OrderPaymentListData } from "./dto/orderPayment/OrderPaymentListData";
import { OrderPaymentQueryData } from "./dto/orderPayment/OrderPaymentQueryData";
import { OrderPaymentUpdateRQ } from "./rq/orderPayment/OrderPaymentUpdateRQ";
import { OrderPaymentListRQ } from "./rq/orderPayment/OrderPaymentListRQ";
import { OrderPaymentQueryRQ } from "./rq/orderPayment/OrderPaymentQueryRQ";
import { OrderPaymentUpdateReadData } from "./dto/orderPayment/OrderPaymentUpdateReadData";

/**
 * Order Payment API
 */
export class OrderPaymentApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("OrderPayment", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: OrderPaymentCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: OrderPaymentListRQ, payload?: IApiPayload<OrderPaymentListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: OrderPaymentQueryRQ, payload?: IApiPayload<OrderPaymentQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Sort order payments
   * @param items Items to sort
   * @param payload Payload
   * @returns Result
   */
  sort(items: OrderPaymentListData[], payload?: IApiPayload<number>) {
    return this.sortBase(items, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: OrderPaymentUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<OrderPaymentUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
