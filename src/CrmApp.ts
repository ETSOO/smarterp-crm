import { IApi, IdentityTypeFlags } from "@etsoo/appscript";
import { PersonApi } from "./PersonApi";
import { useRequiredContext } from "@etsoo/react";
import { IServiceApp, ReactAppContext, ServiceApp } from "@etsoo/materialui";
import { PersonProfileApi } from "./PersonProfileApi";
import { Person } from "./utils/Person";
import { PersonProfile } from "./utils/PersonProfile";
import { SystemApi } from "./SystemApi";
import { System } from "./utils/System";
import { CrmUser } from "./CrmUser";
import { Permissions } from "./dto/system/Permissions";

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
export abstract class CrmAppBase extends ServiceApp<CrmUser> {
  /**
   * Core name
   */
  override get coreName(): string {
    return "platform";
  }
}

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

  /**
   * Get person identity type
   * 获取人员身份类型
   * @returns Identity type flags
   */
  getPersonIdentityType(): IdentityTypeFlags;

  /**
   * Owns the permission item
   * 是否有权限项
   * @param item Permission item ID
   * @returns Result
   */
  owns(item: number): boolean;
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

  private getIdentityType(permissions: boolean[]) {
    let type: IdentityTypeFlags = IdentityTypeFlags.None;

    if (permissions[0]) {
      type |= IdentityTypeFlags.User;
    }

    if (permissions[1]) {
      type |= IdentityTypeFlags.Customer;
    }

    if (permissions[2]) {
      type |= IdentityTypeFlags.Supplier;
    }

    if (permissions[3]) {
      type |= IdentityTypeFlags.Org;
    }

    if (permissions[4]) {
      type |= IdentityTypeFlags.Dept;
    }

    if (type !== IdentityTypeFlags.None) {
      type |= IdentityTypeFlags.Contact;
    }

    return type;
  }

  /**
   * Get person identity type
   * 获取人员身份类型
   * @returns Identity type flags
   */
  getPersonIdentityType() {
    const permissions = [
      Permissions.User.Query,
      Permissions.Customer.Query,
      Permissions.Supplier.Query,
      Permissions.Org.Query,
      Permissions.Dept.Query
    ].map((p) => this.owns(p));

    return this.getIdentityType(permissions);
  }

  /**
   * Get profile identity type
   * 获取档案身份类型
   * @returns Identity type flags
   */
  getProfileIdentityType() {
    const permissions = [
      Permissions.User.QueryProfile,
      Permissions.Customer.QueryProfile,
      Permissions.Supplier.QueryProfile,
      Permissions.Org.QueryProfile,
      Permissions.Dept.QueryProfile
    ].map((p) => this.owns(p));

    return this.getIdentityType(permissions);
  }

  /**
   * Owns the permission item
   * 是否有权限项
   * @param item Permission item ID
   * @returns Result
   */
  owns(item: number) {
    // Check the 'all' permission first
    const m = item.toStep(1000);
    if (this.app.userData?.permissionItems.includes(m)) {
      return true;
    }

    if (m === item) {
      // Directly return to avoid additional checking
      return false;
    }

    return this.app.userData?.permissionItems.includes(item) ?? false;
  }
}
