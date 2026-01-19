import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { AssetListRQ } from "./rq/asset/AssetListRQ";
import { AssetListData } from "./dto/asset/AssetListData";
import { AssetQueryRQ } from "./rq/asset/AssetQueryRQ";
import { AssetQueryData } from "./dto/asset/AssetQueryData";
import { AssetUpdateReadData } from "./dto/asset/AssetUpdateReadData";
import { AssetUpdateRQ } from "./rq/asset/AssetUpdateRQ";
import { AssetCreateRQ } from "./rq/asset/AssetCreateRQ";

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
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: AssetCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
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

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: AssetUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<AssetUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
