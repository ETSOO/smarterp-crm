import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { PersonCategoryCreateRQ } from "./rq/personCategory/PersonCategoryCreateRQ";
import { PersonCategoryListRQ } from "./rq/personCategory/PersonCategoryListRQ";
import { PersonCategoryListData } from "./dto/personCategory/PersonCategoryListData";
import { PersonCategoryQueryRQ } from "./rq/personCategory/PersonCategoryQueryRQ";
import { PersonCategoryQueryData } from "./dto/personCategory/PersonCategoryQueryData";
import { PersonCategoryUpdateRQ } from "./rq/personCategory/PersonCategoryUpdateRQ";
import { PersonCategoryUpdateReadData } from "./dto/personCategory/PersonCategoryUpdateReadData";

/**
 * Person category API
 */
export class PersonCategoryApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("PersonCategory", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: PersonCategoryCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(
    rq: PersonCategoryListRQ,
    payload?: IApiPayload<PersonCategoryListData[]>
  ) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(
    rq: PersonCategoryQueryRQ,
    payload?: IApiPayload<PersonCategoryQueryData[]>
  ) {
    return this.queryBase(rq, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: PersonCategoryUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<PersonCategoryUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
