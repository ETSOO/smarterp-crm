import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { AddressCreateRQ } from "./rq/personAddress/AddressCreateRQ";
import { AddressUpdateRQ } from "./rq/personAddress/AddressUpdateRQ";
import { AddressUpdateReadData } from "./dto/personAddress/AddressUpdateReadData";
import { AddressLocationCreateRQ } from "./rq/personAddress/AddressLocationCreateRQ";
import { AddressListRQ } from "./rq/personAddress/AddressListRQ";
import { AddressQueryData } from "./dto/personAddress/AddressQueryData";
import { AddressListData } from "./dto/personAddress/AddressListData";

/**
 * Person address API
 */
export class PersonAddressApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("PersonAddress", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: AddressCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * Create location
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  createLocation(rq: AddressLocationCreateRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/CreateLocation`, rq, payload);
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
  list(rq: AddressListRQ, payload?: IApiPayload<AddressListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: AddressListRQ, payload?: IApiPayload<AddressQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: AddressUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<AddressUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
