import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { UserListRQ } from "./rq/user/UserListRQ";
import { UserListData } from "./dto/user/UserListData";
import { UserQueryRQ } from "./rq/user/UserQueryRQ";
import { UserQueryData } from "./dto/user/UserQueryData";

/**
 * User API
 */
export class UserApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("User", app, api);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: UserListRQ, payload?: IApiPayload<UserListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: UserQueryRQ, payload?: IApiPayload<UserQueryData[]>) {
    return this.queryBase(rq, payload);
  }
}
