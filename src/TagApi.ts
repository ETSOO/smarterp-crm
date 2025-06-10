import {
  BusinessUtils,
  EntityApi,
  IApi,
  IApiPayload,
  IApp
} from "@etsoo/appscript";
import { TagListRQ } from "./rq/tag/TagListRQ";
import { TagQueryData } from "./dto/tag/TagQueryData";
import { TagQueryRQ } from "./rq/tag/TagQueryRQ";

/**
 * Tag API
 */
export class TagApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Tag", app, api);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: TagListRQ, payload?: IApiPayload<string[]>) {
    return this.api.post(
      `${this.flag}/List`,
      BusinessUtils.formatQuery(rq),
      payload
    );
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: TagQueryRQ, payload?: IApiPayload<TagQueryData[]>) {
    return this.queryBase(rq, payload);
  }
}
