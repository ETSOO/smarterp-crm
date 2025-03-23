import { IApi, IApp, IdentityType } from "@etsoo/appscript";
import { PersonApi } from "./PersonApi";
import { useRequiredContext } from "@etsoo/react";
import { IServiceApp, ReactAppContext } from "@etsoo/materialui";
import { IdentityTypeData } from "./dto/person/ContactItem";
import { PersonTitle } from "./dto/person/PersonTitle";
import { ListType } from "@etsoo/shared";
import { MaritalStatus } from "./dto/person/MaritalStatus";
import { PersonDegree } from "./dto/person/PersonDegree";
import { PersonEducation } from "./dto/person/PersonEducation";

/**
 * Get CRM app context hook
 * @returns CRM app
 */
export function useRequiredCrmContext(): ICrmApp {
  // Get the app context
  const app = useRequiredContext(ReactAppContext) as ICrmServiceApp;

  // Check the app type
  if ("crm" in app) {
    return app.crm;
  } else {
    return app;
  }
}

/**
 * CRM service app interface
 * CRM 服务应用程序接口
 */
export type ICrmServiceApp = IServiceApp & (ICrmApp | { crm: ICrmApp });

/**
 * CRM application interface
 * CRM应用程序接口
 */
export interface ICrmApp {
  /**
   * Application
   * 应用程序
   */
  get app(): IApp;

  /**
   * Person API
   * 人员接口
   */
  readonly personApi: PersonApi;

  /**
   * Get marital status
   * 获取婚姻状况
   * @param status
   */
  getMaritalStatus(status?: MaritalStatus): string | undefined;

  /**
   * Get marital statuses
   * 获取婚姻状况列表
   * @param status
   */
  getMaritalStatuses(): ListType[];

  /**
   * Get person degree
   * 获取人员学历
   * @param degree
   */
  getPersonDegree(degree?: PersonDegree): string | undefined;

  /**
   * Get person degree list
   * 获取人员学历列表
   */
  getPersonDegrees(): ListType[];

  /**
   * Get person education
   * 获取人员学历
   * @param education
   */
  getPersonEducation(education?: PersonEducation): string | undefined;

  /**
   * Get person education list
   * 获取人员学历列表
   */
  getPersonEducations(): ListType[];

  /**
   * Get person gender
   * 获取人员性别
   * @param gender Gender value
   * @returns Label
   */
  getPersonGender(gender?: string): string | undefined;

  /**
   * Get identity type
   * 获取身份类型
   * @param data Identity type data
   */
  getIdentityType(data?: IdentityTypeData): string;

  /**
   * Get person title
   * 获取人员头衔
   * @param title
   */
  getPersonTitle(title?: PersonTitle): string | undefined;

  /**
   * Get person titles
   * 获取人员头衔
   */
  getPersonTitles(): ListType[];
}

/**
 * CRM application
 * CRM应用程序
 */
export class CrmApp implements ICrmApp {
  private _personApi?: PersonApi;
  /**
   * Person API
   * 人员接口
   */
  get personApi() {
    return (this._personApi ??= new PersonApi(this.app, this.api));
  }

  /**
   * Constructor
   * 构造函数
   * @param app Base application
   * @param api API
   */
  constructor(public readonly app: IApp, public readonly api: IApi) {}

  /**
   * Get person gender
   * 获取人员性别
   * @param gender Gender value
   * @returns Label
   */
  getPersonGender(gender?: string) {
    if (gender === "M") return this.app.get("personMale") ?? "Male";
    else if (gender === "F") return this.app.get("personFemale") ?? "Female";
    else return undefined;
  }

  /**
   * Get identity type
   * 获取身份类型
   * @param data Identity type data
   */
  getIdentityType(data?: IdentityTypeData) {
    if (data == null) return "";

    if (data.isOrg) {
      return this.app.get("org")!;
    }

    const type = data.identityType;
    return this.app
      .getEnumList(IdentityType, "id", (id, _key) => {
        if ((id & type) > 0) return id;
      })
      .map((d) => d.label)
      .join(", ");
  }

  /**
   * Get marital status
   * 获取婚姻状况
   * @param status
   */
  getMaritalStatus(status?: MaritalStatus) {
    if (status == null) return undefined;
    const key = MaritalStatus[status];
    return this.app.get("marital" + key) ?? key;
  }

  /**
   * Get marital statuses
   * 获取婚姻状况列表
   * @param status
   */
  getMaritalStatuses() {
    return this.app.getEnumList(MaritalStatus, "marital");
  }

  /**
   * Get person degree
   * 获取人员学历
   * @param degree
   */
  getPersonDegree(degree?: PersonDegree) {
    if (degree == null) return undefined;
    const key = PersonDegree[degree];
    return this.app.get("degree" + key) ?? key;
  }

  /**
   * Get person degree list
   * 获取人员学历列表
   */
  getPersonDegrees() {
    return this.app.getEnumList(PersonDegree, "degree");
  }

  /**
   * Get person education
   * 获取人员学历
   * @param education
   */
  getPersonEducation(education?: PersonEducation) {
    if (education == null) return undefined;
    const key = PersonEducation[education];
    return this.app.get("education" + key) ?? key;
  }

  /**
   * Get person education list
   * 获取人员学历列表
   */
  getPersonEducations() {
    return this.app.getEnumList(PersonEducation, "education");
  }

  /**
   * Get person title
   * 获取人员头衔
   * @param title
   */
  getPersonTitle(title?: PersonTitle) {
    if (title == null) return undefined;
    const key = PersonTitle[title];
    return this.app.get("personTitle" + key) ?? key;
  }

  /**
   * Get person titles
   * 获取人员头衔
   */
  getPersonTitles() {
    return this.app.getEnumList(PersonTitle, "personTitle");
  }
}
