import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { StockListRQ } from "./rq/stock/StockListRQ";
import { StockListData } from "./dto/stock/StockListData";
import { StockQueryRQ } from "./rq/stock/StockQueryRQ";
import { StockQueryData } from "./dto/stock/StockQueryData";
import { StockAssembleRQ } from "./rq/stock/StockAssembleRQ";
import { StockActionPayload } from "./dto/stock/StockActionPayload";
import { StockLoseRQ } from "./rq/stock/StockLoseRQ";
import { StockInitRQ } from "./rq/stock/StockInitRQ";
import { StockOrderOutRQ } from "./rq/stock/StockOrderOutRQ";
import { StockPOInRQ } from "./rq/stock/StockPOInRQ";
import { StockReceiveRQ } from "./rq/stock/StockReceiveRQ";
import { StockTransferRQ } from "./rq/stock/StockTransferRQ";

/**
 * Stock API
 */
export class StockApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Stock", app, api);
  }

  /**
   * Assemble stock / 组装库存
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  assemble(rq: StockAssembleRQ, payload?: StockActionPayload) {
    return this.api.post(`${this.flag}/Assemble`, rq, payload);
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
  list(rq: StockListRQ, payload?: IApiPayload<StockListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Stock loss / 库存报损
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  lose(rq: StockLoseRQ, payload?: StockActionPayload) {
    return this.api.post(`${this.flag}/Lose`, rq, payload);
  }

  /**
   * Init stock / 初始化库存
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  init(rq: StockInitRQ, payload?: StockActionPayload) {
    return this.api.post(`${this.flag}/Init`, rq, payload);
  }

  /**
   * Order delivering / 订单发货
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  orderOut(rq: StockOrderOutRQ, payload?: StockActionPayload) {
    return this.api.post(`${this.flag}/OrderOut`, rq, payload);
  }

  /**
   * PO receiving / 采购入库
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  poIn(rq: StockPOInRQ, payload?: StockActionPayload) {
    return this.api.post(`${this.flag}/POIn`, rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: StockQueryRQ, payload?: IApiPayload<StockQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Receive stock / 入库
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  receive(rq: StockReceiveRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/Receive`, rq, payload);
  }

  /**
   * Transfer stock / 调货
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  transfer(rq: StockTransferRQ, payload?: StockActionPayload) {
    return this.api.post(`${this.flag}/Transfer`, rq, payload);
  }
}
