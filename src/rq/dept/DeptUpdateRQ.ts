import { DataTypes } from "@etsoo/shared";
import { DeptCreateRQ } from "./DeptCreateRQ";

/**
 * Department update request data
 * 部门更新请求数据
 */
export type DeptUpdateRQ = DataTypes.EditType<DeptCreateRQ>;
