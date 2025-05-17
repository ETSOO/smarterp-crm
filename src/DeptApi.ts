import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { DeptListRQ } from "./rq/dept/DeptListRQ";
import { DeptListData } from "./dto/dept/DeptListData";
import { DeptQueryRQ } from "./rq/dept/DeptQueryRQ";
import { DeptQueryData } from "./dto/dept/DeptQueryData";
import { DeptCreateRQ } from "./rq/dept/DeptCreateRQ";
import { DeptUpdateRQ } from "./rq/dept/DeptUpdateRQ";
import { DeptUpdateReadData } from "./dto/dept/DeptUpdateReadData";

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
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: DeptCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
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

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: DeptUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<DeptUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
