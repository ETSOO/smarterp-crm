import { MapApiProvider, PlaceLocation } from "@etsoo/appscript";
import { AddressKind } from "./AddressItem";

/**
 * Address update read data
 * 地址更新读取数据
 */
export type AddressUpdateReadData = {
  /**
   * ID
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
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
};
