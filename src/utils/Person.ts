import { IdentityTypeFlags } from "@etsoo/appscript";
import { ICrmApp } from "../CrmApp";
import { PersonTitle } from "../dto/person/PersonTitle";
import { MaritalStatus } from "../dto/person/MaritalStatus";
import { PersonDegree } from "../dto/person/PersonDegree";
import { PersonEducation } from "../dto/person/PersonEducation";
import { PersonListDto } from "../dto/person/PersonListDto";
import { IdentityTypeData } from "../dto/person/IdentityTypeData";

/**
 * Person utils
 * 人员工具类
 */
export namespace PersonUtils {
  /**
   * Get identity type function
   * 获取身份类型函数
   * @param crm CRM app
   * @returns getIdentityType function
   */
  export const getIdentityType =
    (crm: ICrmApp) => (data?: IdentityTypeData | IdentityTypeFlags) => {
      if (data == null) return "";

      const type = typeof data === "number" ? data : data.identityType;

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
   * @returns Get list label function
   */
  export const getListLabel = (crm: ICrmApp) => (data: PersonListDto) => {
    const type = getIdentityType(crm)(data);
    let label = `[${type}] ${data.name}`;

    if (data.jobTitle) {
      label += ` (${data.jobTitle})`;
    }

    if (data.identityType === IdentityTypeFlags.Contact && data.owner) {
      label += ` / ${data.owner.name}`;
    }

    return label;
  };
}

/**
 * Person
 * 人员
 */
export class Person {
  constructor(private crm: ICrmApp) {}

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
    if (gender === "M") return this.crm.app.get("personMale") ?? "Male";
    else if (gender === "F")
      return this.crm.app.get("personFemale") ?? "Female";
    else return undefined;
  }

  /**
   * Get identity type
   * 获取身份类型
   * @param data Identity type data
   */
  getIdentityType = (data?: IdentityTypeData | IdentityTypeFlags) =>
    PersonUtils.getIdentityType(this.crm)(data);

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
   * @param status
   */
  getMaritalStatuses() {
    return this.crm.app.getEnumList(MaritalStatus, "marital");
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
