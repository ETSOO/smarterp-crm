import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { PersonInfoCreateRQ } from "./rq/personInfo/PersonInfoCreateRQ";
import { PersonInfoQueryRQ } from "./rq/personInfo/PersonInfoQueryRQ";
import { PersonInfoQueryData } from "./dto/personInfo/PersonInfoQueryData";
import { PersonInfoUpdateRQ } from "./rq/personInfo/PersonInfoUpdateRQ";

/**
 * Person info API
 */
export class PersonInfoApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("PersonInfo", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: PersonInfoCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * Delete
   * @param id Contact id
   * @param payload Payload
   * @returns Result
   */
  delete(id: number, payload?: IdResultPayload) {
    return this.deleteBase(id, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: PersonInfoQueryRQ, payload?: IApiPayload<PersonInfoQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Read info
   * @param id Info id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<string>) {
    return this.api.get(`${this.flag}/Read/${id}`, undefined, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: PersonInfoUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }
}
