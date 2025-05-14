import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { SupplierListRQ } from "./rq/supplier/SupplierListRQ";
import { SupplierListData } from "./dto/supplier/SupplierListData";
import { SupplierQueryRQ } from "./rq/supplier/SupplierQueryRQ";
import { SupplierQueryData } from "./dto/supplier/SupplierQueryData";

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
}
