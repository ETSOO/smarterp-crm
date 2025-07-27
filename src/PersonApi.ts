import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { PersonListRQ } from "./rq/person/PersonListRQ";
import { PersonQueryRQ } from "./rq/person/PersonQueryRQ";
import { PersonListDto } from "./dto/person/PersonListDto";
import { PersonQueryData } from "./dto/person/PersonQueryData";
import { PersonViewData } from "./dto/person/PersonReadDto";
import { ChoosePersonsRQ } from "./rq/person/ChoosePersonsRQ";
import { ChoosePersonsData } from "./dto/person/ChoosePersonsData";
import { PersonUpdateReadData } from "./dto/person/PersonUpdateReadData";
import { PersonUpdateRQ } from "./rq/person/PersonUpdateRQ";
import { AddressCreateRQ } from "./rq/person/AddressCreateRQ";
import { AddressUpdateRQ } from "./rq/person/AddressUpdateRQ";
import { AddressUpdateReadData } from "./dto/person/AddressUpdateReadData";
import { PersonInfoCreateRQ } from "./rq/person/PersonInfoCreateRQ";
import { PersonInfoQueryData } from "./dto/person/PersonInfoQueryData";
import { PersonInfoUpdateRQ } from "./rq/person/PersonInfoUpdateRQ";

/**
 * Person API
 */
export class PersonApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Person", app, api);
  }

  /**
   * Choose persons
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  choose(rq: ChoosePersonsRQ, payload?: IApiPayload<ChoosePersonsData>) {
    return this.api.post(`${this.flag}/Choose`, rq, payload);
  }

  /**
   * Create address
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  createAddress(rq: AddressCreateRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/CreateAddress`, rq, payload);
  }

  /**
   * Create info
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  createInfo(rq: PersonInfoCreateRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/CreateInfo`, rq, payload);
  }

  /**
   * Delete address
   * @param id Address id
   * @param payload Payload
   * @returns Result
   */
  deleteAddress(id: number, payload?: IdResultPayload) {
    return this.api.delete(
      `${this.flag}/DeleteAddress/${id}`,
      undefined,
      payload
    );
  }

  /**
   * Delete info
   * @param id Info id
   * @param payload Payload
   * @returns Result
   */
  deleteInfo(id: number, payload?: IdResultPayload) {
    return this.api.delete(`${this.flag}/DeleteInfo/${id}`, undefined, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: PersonListRQ, payload?: IApiPayload<PersonListDto[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: PersonQueryRQ, payload?: IApiPayload<PersonQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Query info
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryInfo(rq: PersonQueryRQ, payload?: IApiPayload<PersonInfoQueryData[]>) {
    return this.api.post(`${this.flag}/QueryInfo`, rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<PersonViewData>) {
    return this.readBase(id, payload);
  }

  /**
   * Read info
   * @param id Info id
   * @param payload Payload
   * @returns Result
   */
  readInfo(id: number, payload?: IApiPayload<string>) {
    return this.api.get(`${this.flag}/ReadInfo/${id}`, undefined, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: PersonUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update address
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateAddress(rq: AddressUpdateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/UpdateAddress`, rq, payload);
  }

  /**
   * Update info
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateInfo(rq: PersonInfoUpdateRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/UpdateInfo`, rq, payload);
  }

  /**
   * Update address read
   * @param id Address id
   * @param payload Payload
   * @returns Result
   */
  updateAddressRead(id: number, payload?: IApiPayload<AddressUpdateReadData>) {
    return this.api.get(
      `${this.flag}/UpdateAddressRead/${id}`,
      undefined,
      payload
    );
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<PersonUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
