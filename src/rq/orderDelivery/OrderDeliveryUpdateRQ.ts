import { DataTypes } from "@etsoo/shared";
import { OrderDeliveryCreateRQ } from "./OrderDeliveryCreateRQ";

/**
 * Update order delivery request data
 * 更新订单配送方式请求数据
 */
export type OrderDeliveryUpdateRQ = DataTypes.EditType<OrderDeliveryCreateRQ>;
