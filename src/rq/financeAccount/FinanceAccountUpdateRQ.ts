import { DataTypes } from "@etsoo/shared";
import { FinanceAccountCreateRQ } from "./FinanceAccountCreateRQ";

/**
 * Finance account update request data
 * 财务账户更新请求数据
 */
export type FinanceAccountUpdateRQ = DataTypes.EditType<FinanceAccountCreateRQ>;
