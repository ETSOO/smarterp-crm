import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { ContactCreateRQ } from "./rq/personContact/ContactCreateRQ";
import { ContactRelationAddRQ } from "./rq/personContact/ContactRelationAddRQ";
import { ContactListRQ } from "./rq/personContact/ContactListRQ";
import { PersonContactItem } from "./dto/personContact/PersonContactItem";
import { ContactQueryRQ } from "./rq/personContact/ContactQueryRQ";
import { ContactQueryData } from "./dto/personContact/ContactQueryData";
import { ContactRelationUpdateRQ } from "./rq/personContact/ContactRelationUpdateRQ";
import { ContactRelationUpdateReadData } from "./dto/personContact/ContactRelationUpdateReadData";

/**
 * Person contact API
 */
export class PersonContactApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("PersonContact", app, api);
  }

  /**
   * Add contact relation
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  add(rq: ContactRelationAddRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/Add`, rq, payload);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: ContactCreateRQ, payload?: IdResultPayload) {
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
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: ContactListRQ, payload?: IApiPayload<PersonContactItem[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: ContactQueryRQ, payload?: IApiPayload<ContactQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Update contact relation
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateRelation(rq: ContactRelationUpdateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/UpdateRelation`, rq, payload);
  }

  /**
   * Update contact relation read
   * @param id Relation id
   * @param payload Payload
   * @returns Result
   */
  updateRelationRead(
    id: number,
    payload?: IApiPayload<ContactRelationUpdateReadData>
  ) {
    return this.api.get(
      `${this.flag}/UpdateRelationRead/${id}`,
      undefined,
      payload
    );
  }
}
