import { ShoppingPromotion } from "@etsoo/appscript";
import { PromotionCodeData } from "./PromotionCodeData";
import { PromotionItem } from "./PromotionItem";

export type PromotionOrderLine = {
  price: number;
  qty: number;
  currentPrice?: number | undefined;
};

export type PromotionCode = {
  id: number;
  label: string;
  calculate: (
    p: PromotionItem,
    sale: PromotionOrderLine | null | undefined,
    amount: number
  ) => ShoppingPromotion | undefined;
  validate: (data: PromotionCodeData) => string | void;
};

export const promotionCodes: PromotionCode[] = [
  {
    id: 1,
    label: "OMJ", // 订单满{m}减{n}
    calculate: (
      p: PromotionItem,
      sale: PromotionOrderLine | null | undefined,
      amount: number
    ) => {
      const { id, title, minAmount, discount } = p;
      if (minAmount < 1) return undefined;

      const times = Math.floor(amount / minAmount);
      if (times > 0) {
        return {
          id,
          title,
          amount: times * discount
        };
      }
      return undefined;
    },
    validate: (data: PromotionCodeData) => {
      if (data.minAmount == null || data.minAmount < 1) return "MinAmount";
      if (
        data.discount == null ||
        data.discount < 1 ||
        data.discount >= data.minAmount
      )
        return "Discount";
    }
  },
  {
    id: 6,
    label: "PMJ", // 产品满{m}减{n}
    calculate: (
      p: PromotionItem,
      sale: PromotionOrderLine | null | undefined,
      amount: number
    ) => {
      if (sale == null) return undefined;
      const { id, title, minAmount, discount } = p;
      if (minAmount > 0 && amount < minAmount) return undefined;

      const { price, currentPrice = price, qty } = sale;
      const newAmount = currentPrice * qty;
      const times = Math.floor(newAmount / minAmount);
      if (times > 0) {
        const newDiscount = times * discount;
        sale.currentPrice = Math.round((newAmount - newDiscount) / qty);
        return {
          id,
          title,
          amount: newDiscount
        };
      }
      return undefined;
    },
    validate: (data: PromotionCodeData) => {
      if (data.minAmount == null || data.minAmount < 1) return "MinAmount";
      if (!data.productIds?.length && !data.productCategoryIds?.length)
        return "Products";
      if (
        data.discount == null ||
        data.discount < 1 ||
        data.discount >= data.minAmount
      )
        return "Discount";
    }
  },
  {
    id: 2,
    label: "PMS", // 产品买{n}送一
    calculate: (
      p: PromotionItem,
      sale: PromotionOrderLine | null | undefined,
      amount: number
    ) => {
      if (sale == null) return undefined;
      const { id, title, minAmount, discount } = p;
      if (minAmount > 0 && amount < minAmount) return undefined;

      const { qty, price, currentPrice = price } = sale;
      const times = Math.floor(qty / (discount + 1));
      if (times > 0) {
        const newDiscount = times * currentPrice;
        sale.currentPrice = Math.round(
          (currentPrice * qty - newDiscount) / qty
        );
        return {
          id,
          title,
          amount: newDiscount
        };
      }

      return undefined;
    },
    validate: (data: PromotionCodeData) => {
      if (!data.productIds?.length && !data.productCategoryIds?.length)
        return "Products";
      if (data.discount == null || data.discount < 1) return "Discount";
    }
  },
  {
    id: 3,
    label: "PEZ", // 产品第二件{n}折
    calculate: (
      p: PromotionItem,
      sale: PromotionOrderLine | null | undefined,
      amount: number
    ) => {
      if (sale == null) return undefined;
      const { id, title, minAmount, discount } = p;
      if (minAmount > 0 && amount < minAmount) return undefined;

      const { qty, price, currentPrice = price } = sale;
      const times = Math.floor(qty / 2);
      if (times > 0) {
        const secondPrice = Math.round(currentPrice * (100 - discount)) / 100;
        const amount = times * secondPrice;

        // Average price
        const averagePrice = Math.round((currentPrice * qty - amount) / qty);
        sale.currentPrice = averagePrice;

        return {
          id,
          title,
          amount
        };
      }

      return undefined;
    },
    validate: (data: PromotionCodeData) => {
      if (!data.productIds?.length && !data.productCategoryIds?.length)
        return "Products";
      if (data.discount == null || data.discount < 10 || data.discount >= 100)
        return "Discount";
    }
  },
  {
    id: 7,
    label: "PKZ", // 产品{n}折
    calculate: (
      p: PromotionItem,
      sale: PromotionOrderLine | null | undefined,
      amount: number
    ) => {
      if (sale == null) return undefined;
      const { id, title, minAmount, discount } = p;
      if (minAmount > 0 && amount < minAmount) return undefined;

      const { qty, price, currentPrice = price } = sale;
      const newPrice = Math.round(currentPrice * discount) / 100;
      sale.currentPrice = newPrice;

      return {
        id,
        title,
        amount: Math.round((currentPrice - newPrice) * qty)
      };
    },
    validate: (data: PromotionCodeData) => {
      if (!data.productIds?.length && !data.productCategoryIds?.length)
        return "Products";
      if (data.discount == null || data.discount < 1 || data.discount >= 100)
        return "Discount";
    }
  },
  {
    id: 8,
    label: "PJH", // 产品{n}件以上{m}优惠价
    calculate: (
      p: PromotionItem,
      sale: PromotionOrderLine | null | undefined,
      amount: number
    ) => {
      if (sale == null) return undefined;
      const { id, title, minAmount, discount } = p;
      if (discount < 2 || minAmount < 0.01) return undefined;

      const { qty, price, currentPrice = price } = sale;

      if (qty < discount || currentPrice <= minAmount) return undefined;

      sale.currentPrice = minAmount;

      return {
        id,
        title,
        amount: Math.round((currentPrice - minAmount) * qty)
      };
    },
    validate: (data: PromotionCodeData) => {
      if (!data.productIds?.length && !data.productCategoryIds?.length)
        return "Products";
      if (data.minAmount == null || data.minAmount < 0.01) return "MinAmount";
      if (data.discount == null || data.discount < 2) return "Discount";
    }
  },
  {
    id: 4,
    label: "CKZ", // 客户{n}折
    calculate: (
      p: PromotionItem,
      sale: PromotionOrderLine | null | undefined,
      amount: number
    ) => {
      const { id, title, minAmount, discount } = p;
      if (minAmount > 0 && amount < minAmount) return undefined;

      let newAmount: number;
      if (sale == null) {
        newAmount = Math.round(amount * (100 - discount)) / 100;
      } else {
        const { qty, price, currentPrice = price } = sale;
        const newPrice = Math.round(currentPrice * discount) / 100;
        sale.currentPrice = newPrice;
        newAmount = Math.round(qty * (currentPrice - newPrice));
      }

      return {
        id,
        title,
        amount: newAmount
      };
    },
    validate: (data: PromotionCodeData) => {
      if (!data.personCategoryIds?.length) return "PersonCategories";
      if (data.discount == null || data.discount < 10 || data.discount >= 100)
        return "Discount";
    }
  },
  {
    id: 5,
    label: "CDZ", // {t}会员{n}折
    calculate: (
      p: PromotionItem,
      sale: PromotionOrderLine | null | undefined,
      amount: number
    ) => {
      const { id, title, minAmount, discount } = p;
      if (minAmount > 0 && amount < minAmount) return undefined;

      let newAmount: number;
      if (sale == null) {
        newAmount = Math.round(amount * (100 - discount)) / 100;
      } else {
        const { qty, price, currentPrice = price } = sale;
        const newPrice = Math.round(currentPrice * discount) / 100;
        sale.currentPrice = newPrice;
        newAmount = Math.round(qty * (currentPrice - newPrice));
      }

      return {
        id,
        title,
        amount: newAmount
      };
    },
    validate: (data: PromotionCodeData) => {
      if (!data.personCategoryIds?.length) return "PersonCategories";
      if (data.discount == null || data.discount < 10 || data.discount >= 100)
        return "Discount";
    }
  }
];
