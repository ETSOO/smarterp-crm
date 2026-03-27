import { DataTypes } from "@etsoo/shared";
import { OrderPaymentCreateRQ } from "./OrderPaymentCreateRQ";

/**
 * Update order payment request data
 * 更新订单支付方式请求数据
 */
export type OrderPaymentUpdateRQ = DataTypes.EditType<OrderPaymentCreateRQ>;
