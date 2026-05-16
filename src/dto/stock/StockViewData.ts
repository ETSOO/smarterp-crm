import { ListType } from "@etsoo/shared";
import { StockKind } from "./StockKind";

/**
 * Stock view data
 * 库存浏览数据
 */
export type StockViewData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Kind
   * 类型
   */
  kind: StockKind;

  /**
   * Shipping address id
   * 发货地址编号
   */
  locationFromId: number;

  /**
   * Shipping address
   * 发货地址
   */
  locationFrom: string;

  /**
   * Receiving address id
   * 收货地址编号
   */
  locationToId: number;

  /**
   * Receiving address
   * 收货地址
   */
  locationTo: string;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Customer or supplier ID
   * 发货时是客户编号，入库时是供应商编号
   */
  personId: number;

  /**
   * Name
   * 名称
   */
  personName: string;

  /**
   * User id
   * 操作用户编号
   */
  userId: number;

  /**
   * User name
   * 操作用户姓名
   */
  userName: string;

  /**
   * Orders
   * 订单
   */
  orders?: ListType[];

  /**
   * Tracking number
   * 物流编号
   */
  trackingNumber?: string;

  /**
   * Total lines
   * 总行数
   */
  totalLines: number;

  /**
   * Total qty
   * 总数量
   */
  totalQty: number;

  /**
   * Receipt time, null means in transit
   * 收货时间，空表示在途
   */
  receiptTime?: Date | string;

  /**
   * Creation
   * 登记时间
   */
  creation: Date | string;

  /**
   * Is deletable
   * 是否可删除
   */
  isDeletable: boolean;
};
