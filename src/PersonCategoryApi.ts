import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload,
  MergeRQ
} from "@etsoo/appscript";
import { PersonCategoryCreateRQ } from "./rq/personCategory/PersonCategoryCreateRQ";
import { PersonCategoryListRQ } from "./rq/personCategory/PersonCategoryListRQ";
import { PersonCategoryListData } from "./dto/personCategory/PersonCategoryListData";
import { PersonCategoryQueryRQ } from "./rq/personCategory/PersonCategoryQueryRQ";
import { PersonCategoryQueryData } from "./dto/personCategory/PersonCategoryQueryData";
import { PersonCategoryUpdateRQ } from "./rq/personCategory/PersonCategoryUpdateRQ";
import { PersonCategoryUpdateReadData } from "./dto/personCategory/PersonCategoryUpdateReadData";
import { PersonCategoryDuplicateTestRQ } from "./rq/personCategory/PersonCategoryDuplicateTestRQ";
import { PersonCategoryDuplicateTestData } from "./dto/personCategory/PersonCategoryDuplicateTestData";

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
   * Duplicate test
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  duplicateTest(
    rq: PersonCategoryDuplicateTestRQ,
    payload?: IApiPayload<PersonCategoryDuplicateTestData[]>
  ) {
    return this.api.post(`${this.flag}/DuplicateTest`, rq, payload);
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
   * Merge
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  merge(rq: MergeRQ, payload?: IdResultPayload) {
    return this.mergeBase(rq, payload);
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
   * Sort
   * @param items Items
   * @param payload Payload
   * @returns Result
   */
  sort(items: PersonCategoryListData[], payload?: IApiPayload<number>) {
    return this.sortBase(items, payload);
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
