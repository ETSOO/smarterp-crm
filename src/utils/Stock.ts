import { ICrmApp } from "../CrmApp";
import { StockKind } from "../dto/stock/StockKind";

/**
 * Stock
 * 库存
 */
export class Stock {
  constructor(private crm: ICrmApp) {}

  /**
   * Get kind label
   * 获取类型标签
   * @param kind Kind
   * @returns Result
   */
  getKind(kind?: StockKind) {
    if (kind == null) return undefined;
    const key = StockKind[kind];
    return this.crm.app.get("stockKind" + key) ?? key;
  }

  /**
   * Get stock kinds
   * 获取库存类型
   */
  getKinds() {
    return this.crm.app.getEnumList(StockKind, "stockKind");
  }
}
