import { IApi } from "@etsoo/appscript";
import { PersonApi } from "./PersonApi";
import { useRequiredContext } from "@etsoo/react";
import { IServiceApp, ReactAppContext, ServiceApp } from "@etsoo/materialui";
import { PersonProfileApi } from "./PersonProfileApi";
import { Person } from "./utils/Person";
import { PersonProfile } from "./utils/PersonProfile";
import { SystemApi } from "./SystemApi";
import { System } from "./utils/System";
import { CrmUser } from "./CrmUser";

/**
 * Get CRM app context hook
 * @returns CRM app
 */
export function useRequiredCrmApp(): ICrmApp {
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
 * CRM service app base abstract class
 * CRM 服务应用程序基类抽象类
 */
export abstract class CrmAppBase extends ServiceApp<CrmUser> {}

/**
 * CRM application interface
 * CRM应用程序接口
 */
export interface ICrmApp {
  /**
   * Application
   * 应用程序
   */
  get app(): CrmAppBase;

  /**
   * Person
   * 人员
   */
  readonly person: Person;

  /**
   * Person API
   * 人员接口
   */
  readonly personApi: PersonApi;

  /**
   * Person profile
   * 人员档案
   */
  readonly profile: PersonProfile;

  /**
   * Person profile API
   * 人员档案接口
   */
  readonly profileApi: PersonProfileApi;

  /**
   * System
   * 系统
   */
  readonly system: System;

  /**
   * System API
   * 系统接口
   */
  readonly systemApi: SystemApi;
}

/**
 * CRM application
 * CRM应用程序
 */
export class CrmApp implements ICrmApp {
  private _person?: Person;
  /**
   * Person
   * 人员
   */
  get person(): Person {
    return (this._person ??= new Person(this));
  }

  private _personApi?: PersonApi;
  /**
   * Person API
   * 人员接口
   */
  get personApi() {
    return (this._personApi ??= new PersonApi(this.app, this.api));
  }

  private _profile?: PersonProfile;
  /**
   * Person profile
   * 人员档案
   */
  get profile(): PersonProfile {
    return (this._profile ??= new PersonProfile(this));
  }

  private _profileApi?: PersonProfileApi;
  /**
   * Person profile API
   * 人员档案接口
   */
  get profileApi() {
    return (this._profileApi ??= new PersonProfileApi(this.app, this.api));
  }

  private _system?: System;
  /**
   * System
   * 系统
   */
  get system(): System {
    return (this._system ??= new System(this));
  }

  private _systemApi?: SystemApi;
  /**
   * System API
   * 系统接口
   */
  get systemApi() {
    return (this._systemApi ??= new SystemApi(this.app, this.api));
  }

  /**
   * Constructor
   * 构造函数
   * @param app Base application
   * @param api API
   */
  constructor(public readonly app: CrmAppBase, public readonly api: IApi) {}

  /**
   * Has permission item
   * 是否有权限项
   * @param item Permission item ID
   * @returns Result
   */
  hasPermission(item: number) {
    return this.app.userData?.permissionItems.includes(item) ?? false;
  }
}
