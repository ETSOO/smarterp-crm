import { QueryRQ } from "@etsoo/appscript";
import { OrderDeliveryKind } from "../../dto/orderDelivery/OrderDeliveryKind";

/**
 * Order delivery list request data
 * 订单配送方式列表请求数据
 */
export type OrderDeliveryListRQ = QueryRQ & {
  /**
   * Is order or not
   * 是否为订单
   */
  isOrder: boolean;

  /**
   * Kind
   * 类型
   */
  kind?: OrderDeliveryKind;

  /**
   * Is valid
   * 是否有效
   */
  isValid?: boolean;
};
