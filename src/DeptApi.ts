import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { DeptListRQ } from "./rq/dept/DeptListRQ";
import { DeptListData } from "./dto/dept/DeptListData";
import { DeptQueryRQ } from "./rq/dept/DeptQueryRQ";
import { DeptQueryData } from "./dto/dept/DeptQueryData";

/**
 * Department API
 */
export class DeptApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Dept", app, api);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: DeptListRQ, payload?: IApiPayload<DeptListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: DeptQueryRQ, payload?: IApiPayload<DeptQueryData[]>) {
    return this.queryBase(rq, payload);
  }
}
