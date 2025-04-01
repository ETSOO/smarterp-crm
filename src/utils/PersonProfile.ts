import { ICrmApp } from "../CrmApp";
import { PersonProfileImportance } from "../dto/personProfile/PersonProfileImportance";
import { PersonProfileKind } from "../dto/personProfile/PersonProfileKind";
import { PersonProfileLinkKind } from "../dto/personProfile/PersonProfileLinkKind";

/**
 * Person Profile
 * 人员档案
 */
export class PersonProfile {
  constructor(private crm: ICrmApp) {}

  /**
   * Get future date
   * 获取未来日期
   * @param spanHours Span hours
   */
  getFutureDate(spanHours: number = 1) {
    const date = new Date();
    const m = date.getMinutes();
    const minutes = m > 15 && m < 45 ? 30 : 0;
    date.setHours(date.getHours() + spanHours, minutes, 0, 0);
    return date;
  }

  /**
   * Get kind
   * 获取类型
   * @param kind
   */
  getKind(kind?: PersonProfileKind) {
    if (kind == null) return undefined;
    const key = PersonProfileKind[kind];
    return this.crm.app.get("profileKind" + key) ?? key;
  }

  /**
   * Get kinds
   * 获取类型列表
   */
  getKinds() {
    return this.crm.app.getEnumList(PersonProfileKind, "profileKind");
  }

  /**
   * Get importance
   * 获取重要性
   * @param importance
   */
  getImportance(importance?: PersonProfileImportance) {
    if (importance == null) return undefined;
    const key = PersonProfileImportance[importance];
    return this.crm.app.get("profileImportance" + key) ?? key;
  }

  /**
   * Get Importances
   * 获取重要性列表
   */
  getImportances() {
    return this.crm.app.getEnumList(
      PersonProfileImportance,
      "profileImportance"
    );
  }

  /**
   * Get link kind
   * 获取链接类型
   * @param kind
   */
  getLinkKind(kind?: PersonProfileLinkKind) {
    if (kind == null) return undefined;
    const key = PersonProfileLinkKind[kind];
    return this.crm.app.get("profileLinkKind" + key) ?? key;
  }

  /**
   * Get link kinds
   * 获取链接类型列表
   */
  getLinkKinds() {
    return this.crm.app.getEnumList(PersonProfileLinkKind, "profileLinkKind");
  }
}
