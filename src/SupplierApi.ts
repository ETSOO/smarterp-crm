import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { SupplierListRQ } from "./rq/supplier/SupplierListRQ";
import { SupplierListData } from "./dto/supplier/SupplierListData";
import { SupplierQueryRQ } from "./rq/supplier/SupplierQueryRQ";
import { SupplierQueryData } from "./dto/supplier/SupplierQueryData";
import { SupplierUpdateRQ } from "./rq/supplier/SupplierUpdateRQ";
import { SupplierUpdateReadData } from "./dto/supplier/SupplierUpdateReadData";
import { SupplierCreateRQ } from "./rq/supplier/SupplierCreateRQ";

/**
 * Supplier API
 */
export class SupplierApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Supplier", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: SupplierCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: SupplierListRQ, payload?: IApiPayload<SupplierListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: SupplierQueryRQ, payload?: IApiPayload<SupplierQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: SupplierUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<SupplierUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
