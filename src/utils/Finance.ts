import { ICrmApp } from "../CrmApp";
import { FinanceAccountKind } from "../dto/financeAccount/FinanceAccountKind";

/**
 * Finance
 * 财务
 */
export class Finance {
  constructor(private crm: ICrmApp) {}

  /**
   * Get kind label
   * 获取类型标签
   * @param kind Kind
   * @returns Result
   */
  getAccountKind(kind?: FinanceAccountKind) {
    if (kind == null) return undefined;
    const key = FinanceAccountKind[kind];
    return this.crm.app.get("financeAccountKind" + key) ?? key;
  }

  /**
   * Get account kinds
   * 获取账户类型
   */
  getAccountKinds() {
    return this.crm.app.getEnumList(FinanceAccountKind, "financeAccountKind");
  }
}
