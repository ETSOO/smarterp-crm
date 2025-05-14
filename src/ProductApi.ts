import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { ProductListRQ } from "./rq/product/ProductListRQ";
import { ProductListData } from "./dto/product/ProductListData";
import { ProductQueryRQ } from "./rq/product/ProductQueryRQ";
import { ProductQueryData } from "./dto/product/ProductQueryData";

/**
 * Product API
 */
export class ProductApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Product", app, api);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: ProductListRQ, payload?: IApiPayload<ProductListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: ProductQueryRQ, payload?: IApiPayload<ProductQueryData[]>) {
    return this.queryBase(rq, payload);
  }
}
