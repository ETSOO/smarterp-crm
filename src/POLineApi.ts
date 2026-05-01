import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload,
  ResultPayload
} from "@etsoo/appscript";
import { POLineCreateRQ } from "./rq/poLine/POLineCreateRQ";
import { POLineListData } from "./dto/poline/POLineListData";
import { POLineQueryData } from "./dto/poline/POLineQueryData";
import { POLineUpdateRQ } from "./rq/poLine/POLineUpdateRQ";
import { POLineListRQ } from "./rq/poLine/POLineListRQ";
import { POLineQueryRQ } from "./rq/poLine/POLineQueryRQ";
import { POLineUpdateReadData } from "./dto/poline/POLineUpdateReadData";
import { POLineStartRQ } from "./rq/poLine/POLineStartRQ";
import { POLineQueryAllRQ } from "./rq/poLine/POLineQueryAllRQ";
import { POLineCompleteRQ } from "./rq/poLine/POLineCompleteRQ";
import { POLineQueryAllData } from "./dto/poline/POLineQueryAllData";
import { POLineViewData } from "./dto/poline/POLineViewData";

/**
 * PO line API
 */
export class POLineApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("POLine", app, api);
  }

  /**
   * Complete PO line
   * 完成采购行
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  complete(rq: POLineCompleteRQ, payload?: ResultPayload) {
    return this.api.put(`${this.flag}/Complete`, rq, payload);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: POLineCreateRQ, payload?: IdResultPayload) {
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
  list(rq: POLineListRQ, payload?: IApiPayload<POLineListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: POLineQueryRQ, payload?: IApiPayload<POLineQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Query all PO line info
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryAll(rq: POLineQueryAllRQ, payload?: IApiPayload<POLineQueryAllData[]>) {
    return this.api.post(`${this.flag}/QueryAll`, rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<POLineViewData>) {
    return this.readBase(id, payload);
  }

  /**
   * Rollback the PO line
   * 回滚采购行
   * @param id PO line id
   * @param payload Payload
   * @returns Result
   */
  rollback(id: number, payload?: ResultPayload) {
    return this.api.put(`${this.flag}/Rollback/${id}`, undefined, payload);
  }

  /**
   * Start to execute PO line
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  start(rq: POLineStartRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Start`, rq, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: POLineUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<POLineUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
