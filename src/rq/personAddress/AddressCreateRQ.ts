import { MapApiProvider, PlaceLocation } from "@etsoo/appscript";
import { AddressKind } from "../../dto/personAddress/AddressItem";

/**
 * Person address create request data
 * 人员地址创建请求数据
 */
export type AddressCreateRQ = {
  /**
   * Person id
   * 人员编号
   */
  personId: number;

  /**
   * Address kind
   * 地址类型
   */
  kind: AddressKind;

  /**
   * Map provider
   * 地图提供商
   */
  provider: MapApiProvider;

  /**
   * Place id
   * 地址编号
   */
  placeId?: string;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Region
   * 国家或地区
   */
  region: string;

  /**
   * State
   * 省或州
   */
  state: string;

  /**
   * City
   * 城市
   */
  city: string;

  /**
   * District
   * 区县
   */
  district?: string;

  /**
   * Route
   * 路径
   */
  route?: string;

  /**
   * Street
   * 街道
   */
  street?: string;

  /**
   * Postal code
   * 邮政编码
   */
  postalCode?: string;

  /**
   * Formatted address
   * 格式化地址
   */
  formattedAddress: string;

  /**
   * Location
   * 位置
   */
  location?: PlaceLocation;

  /**
   * Parent id
   * 父编号
   */
  parentId?: number;
};
