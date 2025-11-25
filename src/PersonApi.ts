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
import { PersonInfoQueryRQ } from "./rq/person/PersonInfoQueryRQ";
import { ContactCreateRQ } from "./rq/person/ContactCreateRQ";
import { ContactRelationUpdateReadData } from "./dto/person/ContactRelationUpdateReadData";
import { ContactRelationUpdateRQ } from "./rq/person/ContactRelationUpdateRQ";
import { ContactListRQ } from "./rq/person/ContactListRQ";
import { ContactQueryRQ } from "./rq/person/ContactQueryRQ";
import { PersonContactItem } from "./dto/person/PersonContactItem";
import { ContactQueryData } from "./dto/person/ContactQueryData";
import { PersonDuplicateTestRQ } from "./rq/person/PersonDuplicateTestRQ";
import { PersonDuplicateTestData } from "./dto/person/PersonDuplicateTestData";

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
   * Create contact
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  createContact(rq: ContactCreateRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/CreateContact`, rq, payload);
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
   * Delete contact
   * @param personId Person id
   * @param contactId Contact id
   * @param payload Payload
   * @returns Result
   */
  deleteContact(
    personId: number,
    contactId: number,
    payload?: IdResultPayload
  ) {
    return this.api.delete(
      `${this.flag}/DeleteContact/${personId}/${contactId}`,
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
   * Duplicate test
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  duplicateTest(
    rq: PersonDuplicateTestRQ,
    payload?: IApiPayload<PersonDuplicateTestData[]>
  ) {
    return this.api.post(`${this.flag}/DuplicateTest`, rq, payload);
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
   * List contacts
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  listContact(rq: ContactListRQ, payload?: IApiPayload<PersonContactItem[]>) {
    return this.api.post(`${this.flag}/ListContact`, rq, payload);
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
   * Query contacts
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryContact(rq: ContactQueryRQ, payload?: IApiPayload<ContactQueryData[]>) {
    return this.api.post(`${this.flag}/QueryContact`, rq, payload);
  }

  /**
   * Query info
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryInfo(
    rq: PersonInfoQueryRQ,
    payload?: IApiPayload<PersonInfoQueryData[]>
  ) {
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
   * Update contact relation
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateContactRelation(
    rq: ContactRelationUpdateRQ,
    payload?: IdResultPayload
  ) {
    return this.api.put(`${this.flag}/UpdateContactRelation`, rq, payload);
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
   * Update contact relation read
   * @param id Relation id
   * @param payload Payload
   * @returns Result
   */
  updateContactRelationRead(
    id: number,
    payload?: IApiPayload<ContactRelationUpdateReadData>
  ) {
    return this.api.get(
      `${this.flag}/UpdateContactRelationRead/${id}`,
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
