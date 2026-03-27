/**
 * Order delivery kind
 * 订单配送方式类型
 */
export enum OrderDeliveryKind {
  /**
   * Pickup
   * 自提
   */
  Pickup = 1,

  /**
   * Express
   * 快递
   */
  Express = 2,

  /**
   * Freight
   * 货运
   */
  Freight = 3,

  /**
   * Sea freight
   * 海运
   */
  SeaFreight = 6,

  /**
   * Air freight
   * 空运
   */
  AirFreight = 10,

  /**
   * Rail freight
   * 铁路运输
   */
  RailFreight = 16,

  /**
   * Online
   * 线上交付
   */
  Online = 99,

  /**
   * Other
   * 其他
   */
  Other = 255
}
