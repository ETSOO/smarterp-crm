import { DataTypes } from "@etsoo/shared";
import { PersonCategoryCreateRQ } from "./PersonCategoryCreateRQ";

/**
 * Person category update request data
 * 人员分类更新请求数据
 */
export type PersonCategoryUpdateRQ = DataTypes.EditType<PersonCategoryCreateRQ>;
