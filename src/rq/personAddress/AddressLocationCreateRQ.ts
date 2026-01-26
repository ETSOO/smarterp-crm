/**
 * Address location create request data
 * 地址位置创建请求数据
 */
export type AddressLocationCreateRQ = {
  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Parent address id
   * 父地址编号
   */
  parentId: number;

  /**
   * Place id
   * 地址编号
   */
  placeId?: string;
};
