import { IApiPayload } from "@etsoo/appscript";
import { IActionResult } from "@etsoo/shared";

/**
 * Stock action payload
 * 库存操作负载
 */
export type StockActionPayload = IApiPayload<IActionResult<{ ids: number[] }>>;
