import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { StockSiteQueryRQ } from "./rq/stockSite/StockSiteQueryRQ";
import { StockSiteQueryData } from "./dto/stockSite/StockSiteQueryData";
import { StockSiteViewProductData } from "./dto/stockSite/StockSiteViewProductData";

/**
 * Stock Site API
 */
export class StockSiteApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("StockSite", app, api);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: StockSiteQueryRQ, payload?: IApiPayload<StockSiteQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * View product
   * @param id Product id
   * @param payload Payload
   * @returns Result
   */
  viewProduct(id: number, payload?: IApiPayload<StockSiteViewProductData[]>) {
    return this.api.get(`${this.flag}/ViewProduct/${id}`, undefined, payload);
  }
}
