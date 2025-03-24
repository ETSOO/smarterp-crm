import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { PersonProfileListData } from "./dto/personProfile/PersonProfileListData";
import { PersonProfileListRQ } from "./rq/personProfile/PersonProfileListRQ";
import { PersonProfileQueryRQ } from "./rq/personProfile/PersonProfileQueryRQ";
import { PersonProfileUpdateReadData } from "./dto/personProfile/PersonProfileUpdateReadData";
import { PersonProfileQueryData } from "./dto/personProfile/PersonProfileQueryData";
import { PersonProfileViewData } from "./dto/personProfile/PersonProfileViewData";
import { PersonProfileCreateRQ } from "./rq/personProfile/PersonProfileCreateRQ";

/**
 * Person profile API
 */
export class PersonProfileApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("PersonProfile", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: PersonProfileCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: PersonProfileListRQ, payload: IApiPayload<PersonProfileListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(
    rq: PersonProfileQueryRQ,
    payload?: IApiPayload<PersonProfileQueryData[]>
  ) {
    return this.queryBase(rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<PersonProfileViewData>) {
    return this.readBase(id, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<PersonProfileUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
