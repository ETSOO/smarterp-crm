import { DataTypes } from "@etsoo/shared";
import { AssetCreateRQ } from "./AssetCreateRQ";

/**
 * Update asset request data
 * 更新资产请求数据
 */
export type AssetUpdateRQ = DataTypes.EditType<AssetCreateRQ>;
