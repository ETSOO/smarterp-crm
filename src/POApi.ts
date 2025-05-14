import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { POListRQ } from "./rq/po/POListRQ";
import { POListData } from "./dto/po/POListData";
import { POQueryRQ } from "./rq/po/POQueryRQ";
import { POQueryData } from "./dto/po/POQueryData";

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
}
