import { QueryRQ } from "@etsoo/appscript";
import { OrderPaymentKind } from "../../dto/orderPayment/OrderPaymentKind";

/**
 * Order payment list request data
 * 订单支付方式列表请求数据
 */
export type OrderPaymentListRQ = QueryRQ & {
  /**
   * Kind
   * 类型
   */
  kind?: OrderPaymentKind;

  /**
   * Is valid
   * 是否有效
   */
  isValid?: boolean;
};
