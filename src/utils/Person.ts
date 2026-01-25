import { IdentityTypeFlags } from "@etsoo/appscript";
import { ICrmApp } from "../CrmApp";
import { PersonTitle } from "../dto/person/PersonTitle";
import { MaritalStatus } from "../dto/person/MaritalStatus";
import { PersonDegree } from "../dto/person/PersonDegree";
import { PersonEducation } from "../dto/person/PersonEducation";
import { PersonListDto } from "../dto/person/PersonListDto";
import { IdentityTypeData } from "../dto/person/IdentityTypeData";
import { PersonGender } from "../dto/person/PersonGender";
import { DataTypes } from "@etsoo/shared";
import { PersonInfoKind } from "../dto/personInfo/PersonInfoKind";
import { PersonRelationType } from "../dto/person/PersonRelationType";
import { PersonDuplicateTestData } from "../dto/person/PersonDuplicateTestData";
import { PersonInfoUpdateItem } from "../dto/personInfo/PersonInfoUpdateItem";
import { PersonCategoryDuplicateTestData } from "../dto/personCategory/PersonCategoryDuplicateTestData";
import { AddressKind } from "../dto/personAddress/AddressItem";

/**
 * Person utils
 * 人员工具类
 */
export namespace PersonUtils {
  /**
   * Get identity type function
   * 获取身份类型函数
   * @param crm CRM app
   */
  export const getIdentityType =
    (crm: ICrmApp) => (data?: IdentityTypeData | IdentityTypeFlags) => {
      if (data == null) return "";

      const type = typeof data === "number" ? data : data.identityType;

      if (type === IdentityTypeFlags.None) {
        return crm.app.get("idNone") ?? "Contact";
      }

      return crm.app
        .getEnumList(IdentityTypeFlags, "id", (id, _key) => {
          if ((id & type) > 0) return id;
        })
        .map((d) => d.label)
        .join(", ");
    };

  /**
   * Get list label function
   * 获取列表标签函数
   * @param crm CRM app
   */
  export const getListLabel = (crm: ICrmApp) => (data: PersonListDto) => {
    const type = getIdentityType(crm)(data);
    let label = `[${type}] ${data.name}`;

    if (data.jobTitle) {
      label += ` (${data.jobTitle})`;
    }

    if (data.owner) {
      label += ` / ${data.owner.name}`;
    }

    return label;
  };

  /**
   * Get simple list label function
   * 获取简单列表标签函数
   * @param crm CRM app
   */
  export const getSimpleListLabel = () => (data: PersonListDto) => {
    let label = `${data.name}`;

    if (data.owner) {
      label += ` / ${data.owner.name}`;
    }

    return label;
  };

  /**
   * Get duplicate check list item label
   * @param crm CRM app
   */
  export const getDuplicateLabel =
    (crm: ICrmApp) => (item: PersonDuplicateTestData) => {
      return `[${crm.person.getIdentityType(item.identityType)}] ${item.name}`;
    };

  /**
   * Get duplicate check list item label
   * @param crm CRM app
   */
  export const getCategoryDuplicateLabel =
    (crm: ICrmApp) => (item: PersonCategoryDuplicateTestData) => {
      return `[${crm.person.getIdentityType(
        item.identityType
      )}] ${item.names.join(" -> ")}`;
    };
}

/**
 * Person
 * 人员
 */
export class Person {
  constructor(private crm: ICrmApp) {}

  /**
   * Get address kind
   * 获取地址类型
   * @param kind Address kind
   */
  getAddressKind(kind?: AddressKind) {
    if (kind == null) return undefined;
    const key = AddressKind[kind];
    return this.crm.app.get("addressKind" + key) ?? key;
  }

  /**
   * Get address kinds
   * 获取地址类型列表
   */
  getAddressKinds() {
    return this.crm.app.getEnumList(AddressKind, "addressKind");
  }

  /**
   * Get degree
   * 获取学历
   * @param degree
   */
  getDegree(degree?: PersonDegree) {
    if (degree == null) return undefined;
    const key = PersonDegree[degree];
    return this.crm.app.get("degree" + key) ?? key;
  }

  /**
   * Get degree list
   * 获取学历列表
   */
  getDegrees() {
    return this.crm.app.getEnumList(PersonDegree, "degree");
  }

  /**
   * Get education
   * 获取学历
   * @param education
   */
  getEducation(education?: PersonEducation) {
    if (education == null) return undefined;
    const key = PersonEducation[education];
    return this.crm.app.get("education" + key) ?? key;
  }

  /**
   * Get education list
   * 获取学历列表
   */
  getEducations() {
    return this.crm.app.getEnumList(PersonEducation, "education");
  }

  /**
   * Get gender
   * 获取性别
   * @param gender Gender value
   * @returns Label
   */
  getGender(gender?: string) {
    return gender
      ? (this.crm.app.get(
          `gender${DataTypes.getEnumKey(PersonGender, gender)}`
        ) ?? gender)
      : undefined;
  }

  /**
   * Get gender list
   * 获取性别列表
   */
  getGenders() {
    return this.crm.app.getEnumStrList(PersonGender, "gender");
  }

  /**
   * Get identity type
   * 获取身份类型
   * @param data Identity type data
   */
  getIdentityType = (data?: IdentityTypeData | IdentityTypeFlags) =>
    PersonUtils.getIdentityType(this.crm)(data);

  /**
   * Get info
   * 获取信息
   * @param infos Infos
   * @param kind Info kind
   */
  getInfo(infos: PersonInfoUpdateItem[], kind: PersonInfoKind) {
    const items = infos.filter((d) => d.kind === kind);
    if (items.length === 0) return undefined;

    return items.sortByProperty("isDefault", [true, false])[0].identifier;
  }

  /**
   * Get info kind
   * 获取信息类型
   * @param kind Info kind
   */
  getInfoKind(kind?: PersonInfoKind) {
    if (kind == null) return undefined;
    const key = PersonInfoKind[kind];
    return this.crm.app.get("info" + key) ?? key;
  }

  /**
   * Get info kinds
   * 获取信息类型列表
   */
  getInfoKinds() {
    return this.crm.app.getEnumList(PersonInfoKind, "info");
  }

  /**
   * Get marital status
   * 获取婚姻状况
   * @param status
   */
  getMaritalStatus(status?: MaritalStatus) {
    if (status == null) return undefined;
    const key = MaritalStatus[status];
    return this.crm.app.get("marital" + key) ?? key;
  }

  /**
   * Get marital statuses
   * 获取婚姻状况列表
   */
  getMaritalStatuses() {
    return this.crm.app.getEnumList(MaritalStatus, "marital");
  }

  /**
   * Get relation type
   * 获取关系类型
   * @param relation Relation type
   */
  getRelationType(relation?: PersonRelationType) {
    if (relation == null) return undefined;
    const key = PersonRelationType[relation];
    return this.crm.app.get("relation" + key) ?? key;
  }

  /**
   * Get relation types
   * 获取关系类型列表
   * @param isLegalPerson Whether it is a legal person
   */
  getRelationTypes(isLegalPerson: boolean | undefined | null) {
    if (isLegalPerson == null) {
      return this.crm.app.getEnumList(PersonRelationType, "relation");
    }

    return this.crm.app.getEnumList(PersonRelationType, "relation", (id) =>
      id === 0 || (isLegalPerson ? id < 50 : id >= 50) ? id : undefined
    );
  }

  /**
   * Get title
   * 获取头衔
   * @param title
   */
  getTitle(title?: PersonTitle) {
    if (title == null) return undefined;
    const key = PersonTitle[title];
    return this.crm.app.get("personTitle" + key) ?? key;
  }

  /**
   * Get titles
   * 获取头衔列表
   */
  getTitles() {
    return this.crm.app.getEnumList(PersonTitle, "personTitle");
  }
}
