import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { POListRQ } from "./rq/po/POListRQ";
import { POListData } from "./dto/po/POListData";
import { POQueryRQ } from "./rq/po/POQueryRQ";
import { POQueryData } from "./dto/po/POQueryData";
import { POCreateRQ } from "./rq/po/POCreateRQ";
import { POUpdateRQ } from "./rq/po/POUpdateRQ";
import { POUpdateReadData } from "./dto/po/POUpdateReadData";
import { POViewData } from "./dto/po/POViewData";

/**
 * Purchase order API
 */
export class POApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("PO", app, api);
  }

  /**
   * Create purchase order
   * 创建采购单
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: POCreateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Create`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: POListRQ, payload?: IApiPayload<POListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: POQueryRQ, payload?: IApiPayload<POQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<POViewData>) {
    return this.readBase(id, payload);
  }

  /**
   * Recalculate purchase order
   * 重新计算采购单
   * @param id Purchase order ID
   * @param payload Payload
   * @returns Result
   */
  recalculate(id: number, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Recalculate/${id}`, undefined, payload);
  }

  /**
   * Update purchase order
   * 更新采购单
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: POUpdateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/Update`, rq, payload);
  }

  /**
   * Get purchase order update info
   * 获取采购单更新信息
   * @param id Purchase order id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<POUpdateReadData>) {
    return this.api.get(`${this.flag}/UpdateRead/${id}`, undefined, payload);
  }
}
