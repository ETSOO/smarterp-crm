import { QueryRQ } from "@etsoo/appscript";
import { OrderPaymentKind } from "../../dto/orderPayment/OrderPaymentKind";

/**
 * Order payment list request data
 * 订单支付方式列表请求数据
 */
export type OrderPaymentListRQ = QueryRQ & {
  /**
   * Is order or not
   * 是否为订单
   */
  isOrder: boolean;

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
