import { ICrmApp } from "../CrmApp";
import { QueryForSaleData } from "../dto/product/QueryForSaleData";
import {
  PromotionCodeCalculation,
  promotionCodes,
  PromotionOrderLine
} from "../dto/promotion/PromotionCode";
import { PromotionItem } from "../dto/promotion/PromotionItem";

/**
 * Order utils
 * 订单工具类
 */
export namespace OrderUtils {
  /**
   * Calculate promotions
   * 计算促销
   * @param promotions Promotions
   * @param totalAmount Total amount
   * @param sale Sale item
   * @param onUpdate When promotion pushed
   * @returns Result
   */
  export function calculatePromotions(
    promotions: PromotionItem[],
    totalAmount: () => number,
    sale?: PromotionOrderLine,
    onUpdate?: (promotion: PromotionCodeCalculation) => void
  ) {
    // Non-stackable items
    const nsPromotions = promotions
      .filter((p) => !p.stackable)
      .map((p) => {
        const code = promotionCodes.find((pc) => pc.id === p.code);
        if (code == null) return undefined;
        return code.calculate(p, sale, totalAmount());
      })
      .filter((p): p is PromotionCodeCalculation => p != null);

    // Result
    const items: PromotionCodeCalculation[] = [];

    const maxPromotion = nsPromotions.maxItem("amount");
    if (maxPromotion) {
      items.push(maxPromotion);
      if (onUpdate) onUpdate(maxPromotion);
    }

    // Stackable items
    promotions
      .filter((p) => p.stackable)
      .forEach((p) => {
        const code = promotionCodes.find((pc) => pc.id === p.code);
        if (code == null) return;
        const result = code.calculate(p, sale, totalAmount());
        if (result == null) return;

        items.push(result);
        if (onUpdate) onUpdate(result);
      });

    return items;
  }
}

/**
 * Order
 * 订单
 */
export class Order {
  constructor(private crm: ICrmApp) {}

  /**
   * Get price for sale
   * 获取销售价格
   * @param data Sale data
   * @returns Result
   */
  getPrice(data: QueryForSaleData) {
    const prices = [data.retailPrice];
    if (data.promotionPrice != null && data.promotionPrice < data.retailPrice) {
      prices.push(data.promotionPrice);
    }
    if (
      data.customerRetailPrice != null &&
      data.customerRetailPrice < data.retailPrice
    ) {
      prices.push(data.customerRetailPrice);
    }

    return Math.min(...prices);
  }
}
