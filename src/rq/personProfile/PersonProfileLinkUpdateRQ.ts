import { DataTypes } from "@etsoo/shared";
import { PersonProfileLinkCreateRQ } from "./PersonProfileLinkCreateRQ";

/**
 * Person profile link update request data
 * 人员档案关联更新请求数据
 */
export type PersonProfileLinkUpdateRQ =
  DataTypes.EditType<PersonProfileLinkCreateRQ>;
