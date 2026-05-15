import { StockKind } from "./StockKind";

/**
 * Stock query data
 * 库存查询数据
 */
export type StockQueryData = {
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
   * Tracking number
   * 物流编号
   */
  trackingNumber?: string;

  /**
   * Order / PO ids
   * 相关订单 / 采购 编号
   */
  orderIds?: number[];

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
};
