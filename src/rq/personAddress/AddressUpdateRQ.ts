import { DataTypes } from "@etsoo/shared";
import { AddressCreateRQ } from "./AddressCreateRQ";

/**
 * Person address update request data
 * 人员地址更新请求数据
 */
export type AddressUpdateRQ = DataTypes.EditType<AddressCreateRQ> & {
  /**
   * Parent id
   * 父编号
   */
  parentId?: number;
};
