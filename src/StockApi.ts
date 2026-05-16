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
import { StockQueryProductRQ } from "./rq/stock/StockQueryProductRQ";
import { StockQueryProductData } from "./dto/stock/StockQueryProductData";
import { StockQueryLinesRQ } from "./rq/stock/StockQueryLinesRQ";
import { StockQueryLinesData } from "./dto/stock/StockQueryLinesData";
import { StockUpdateRQ } from "./rq/stock/StockUpdateRQ";
import { StockViewData } from "./dto/stock/StockViewData";

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
   * Query stock lines / 查询库存明细
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryLines(
    rq: StockQueryLinesRQ,
    payload?: IApiPayload<StockQueryLinesData[]>
  ) {
    return this.api.post(`${this.flag}/QueryLines`, rq, payload);
  }

  /**
   * Query stock product / 查询库存产品
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryProduct(
    rq: StockQueryProductRQ,
    payload?: IApiPayload<StockQueryProductData[]>
  ) {
    return this.api.post(`${this.flag}/QueryProduct`, rq, payload);
  }

  /**
   * Read stock data for view / 读取用于浏览的库存数据
   * @param id Stock ID
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<StockViewData>) {
    return this.readBase(id, payload);
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

  /**
   * Update stock / 更新库存
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: StockUpdateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Update`, rq, payload);
  }
}
