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
import { PersonProfileInnerViewData } from "./dto/personProfile/PersonProfileInnerViewData";
import { PersonProfileUpdateRQ } from "./rq/personProfile/PersonProfileUpdateRQ";
import { PersonTaskCreateRQ } from "./rq/personProfile/PersonTaskCreateRQ";
import { PersonProfileAttachmentUpdateRQ } from "./rq/personProfile/PersonProfileAttachmentUpdateRQ";
import { PersonProfileLinkCreateRQ } from "./rq/personProfile/PersonProfileLinkCreateRQ";
import { PersonProfileLinkUpdateRQ } from "./rq/personProfile/PersonProfileLinkUpdateRQ";

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
   * Create profile link
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  createLink(rq: PersonProfileLinkCreateRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/CreateLink`, rq, payload);
  }

  /**
   * Create task
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  createTask(rq: PersonTaskCreateRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/CreateTask`, rq, payload);
  }

  /**
   * Delete attachment
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  deleteAttachment(id: number, payload?: IdResultPayload) {
    return this.api.delete(
      `${this.flag}/DeleteAttachment/${id}`,
      undefined,
      payload
    );
  }

  /**
   * Delete link
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  deleteLink(id: number, payload?: IdResultPayload) {
    return this.api.delete(`${this.flag}/DeleteLink/${id}`, undefined, payload);
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
   * Read for query view
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  readInner(id: number, payload?: IApiPayload<PersonProfileInnerViewData>) {
    return this.api.get<PersonProfileInnerViewData>(
      `${this.flag}/ReadInner/${id}`,
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
  update(rq: PersonProfileUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update attachment
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateAttachment(
    rq: PersonProfileAttachmentUpdateRQ,
    payload?: IdResultPayload
  ) {
    return this.api.put(`${this.flag}/UpdateAttachment`, rq, payload);
  }

  /**
   * Update link
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateLink(rq: PersonProfileLinkUpdateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/UpdateLink`, rq, payload);
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
