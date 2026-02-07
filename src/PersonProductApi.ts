import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  ResultPayload
} from "@etsoo/appscript";
import { PersonProductCreateRQ } from "./rq/personProduct/PersonProductCreateRQ";
import { PersonProductUpdateRQ } from "./rq/personProduct/PersonProductUpdateRQ";
import { PersonProductUpdateReadData } from "./dto/personProduct/PersonProductUpdateReadData";

/**
 * Person product API
 */
export class PersonProductApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("PersonProduct", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: PersonProductCreateRQ, payload?: ResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * Delete
   * @param productId Product id
   * @param personId Person id
   * @param payload Payload
   * @returns Result
   */
  delete(productId: number, personId: number, payload?: ResultPayload) {
    return this.api.delete(
      `${this.flag}/Delete/${productId}/${personId}`,
      undefined,
      payload
    );
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: PersonProductUpdateRQ, payload?: ResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<PersonProductUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
