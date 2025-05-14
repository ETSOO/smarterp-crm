import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { GroupListRQ } from "./rq/group/GroupListRQ";
import { GroupListData } from "./dto/group/GroupListData";
import { GroupQueryRQ } from "./rq/group/GroupQueryRQ";
import { GroupQueryData } from "./dto/group/GroupQueryData";

/**
 * Permission group API
 */
export class GroupApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Group", app, api);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: GroupListRQ, payload?: IApiPayload<GroupListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: GroupQueryRQ, payload?: IApiPayload<GroupQueryData[]>) {
    return this.queryBase(rq, payload);
  }
}
