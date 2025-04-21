import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { PersonListRQ } from "./rq/person/PersonListRQ";
import { PersonQueryRQ } from "./rq/person/PersonQueryRQ";
import { PersonListDto } from "./dto/person/PersonListDto";
import { PersonQueryData } from "./dto/person/PersonQueryData";
import { PersonViewData } from "./dto/person/PersonReadDto";
import { ChoosePersonsRQ } from "./rq/person/ChoosePersonsRQ";
import { ChoosePersonsData } from "./dto/person/ChoosePersonsData";

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
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<PersonViewData>) {
    return this.readBase(id, payload);
  }
}
