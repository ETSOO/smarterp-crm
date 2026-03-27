import { ICrmApp } from "../CrmApp";
import { OrderDeliveryKind } from "../dto/orderDelivery/OrderDeliveryKind";
import { OrderPaymentKind } from "../dto/orderPayment/OrderPaymentKind";
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
  function calculateAmount(
    totalAmount?: number,
    sale?: PromotionOrderLine
  ): number {
    if (totalAmount != null && totalAmount >= 0) return totalAmount;
    if (sale) return sale.qty * (sale.currentPrice ?? sale.price);
    return 0;
  }

  /**
   * Calculate promotions
   * 计算促销
   * @param promotions Promotions
   * @param totalAmount Total amount, default is the line amount, for product level promotion, it should be the line amount; for order level promotion, it should be the order total amount
   * @param sale Sale item
   * @param onUpdate When promotion pushed
   * @returns Result
   */
  export function calculatePromotions(
    promotions: PromotionItem[],
    totalAmount?: number,
    sale?: PromotionOrderLine,
    onUpdate?: (
      promotion: PromotionItem,
      result: PromotionCodeCalculation
    ) => void
  ) {
    // Total amount
    let total = calculateAmount(totalAmount, sale);

    // Non-stackable items, keep the total amount value
    const nonStackablePromotions = promotions.filter((p) => !p.stackable);
    const nsPromotions = nonStackablePromotions
      .map((p) => {
        const code = promotionCodes.find((pc) => pc.id === p.code);
        if (code == null) return undefined;
        return code.calculate(p, sale, total);
      })
      .filter((p): p is PromotionCodeCalculation => p != null);

    // Result
    const items: PromotionCodeCalculation[] = [];

    const maxPromotion = nsPromotions.maxItem("amount");
    if (maxPromotion) {
      items.push(maxPromotion);

      // Subtract the amount of the promotion
      total -= maxPromotion.amount;

      if (onUpdate) {
        onUpdate(
          nonStackablePromotions.find((p) => p.id === maxPromotion.id)!,
          maxPromotion
        );
      }
    }

    // Stackable items
    promotions
      .filter((p) => p.stackable)
      .forEach((p) => {
        const code = promotionCodes.find((pc) => pc.id === p.code);
        if (code == null) return;

        const result = code.calculate(p, sale, total);
        if (result == null) return;

        items.push(result);

        // Subtract the amount of the promotion
        total -= result.amount;

        if (onUpdate) onUpdate(p, result);
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
   * Get order delivery kind label
   * 获取订单配送方式标签
   * @param delivery Delivery kind
   * @returns Result
   */
  getDeliveryKind(delivery?: OrderDeliveryKind) {
    if (delivery == null) return undefined;
    const key = OrderDeliveryKind[delivery];
    return this.crm.app.get("orderDeliveryKind" + key) ?? key;
  }

  /**
   * Get order delivery kinds
   * 获取订单配送方式
   */
  getDeliveryKinds() {
    return this.crm.app.getEnumList(OrderDeliveryKind, "orderDeliveryKind");
  }

  /**
   * Get order payment kind label
   * 获取订单付款方式标签
   * @param payment Payment kind
   * @returns Result
   */
  getPaymentKind(payment?: OrderPaymentKind) {
    if (payment == null) return undefined;
    const key = OrderPaymentKind[payment];
    return this.crm.app.get("orderPaymentKind" + key) ?? key;
  }

  /**
   * Get order payment kinds
   * 获取订单付款方式
   */
  getPaymentKinds() {
    return this.crm.app.getEnumList(OrderPaymentKind, "orderPaymentKind");
  }

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
