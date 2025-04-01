import { DataTypes } from "@etsoo/shared";
import { PersonProfileCreateRQ } from "./PersonProfileCreateRQ";

/**
 * Person profile update request data
 * 人员档案更新请求数据
 */
export type PersonProfileUpdateRQ = DataTypes.EditType<PersonProfileCreateRQ>;
