import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { AssetListRQ } from "./rq/asset/AssetListRQ";
import { AssetListData } from "./dto/asset/AssetListData";
import { AssetQueryRQ } from "./rq/asset/AssetQueryRQ";
import { AssetQueryData } from "./dto/asset/AssetQueryData";

/**
 * Asset API
 */
export class AssetApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Asset", app, api);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: AssetListRQ, payload?: IApiPayload<AssetListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: AssetQueryRQ, payload?: IApiPayload<AssetQueryData[]>) {
    return this.queryBase(rq, payload);
  }
}
