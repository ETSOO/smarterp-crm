/**
 * Asset list data
 * 资产列表数据
 */
export type AssetListData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Product name
   * 产品名称
   */
  product: string;

  /**
   * Title
   * 标题
   */
  sn: string;

  /**
   * Expiry
   * 到期时间
   */
  expiry: string | Date;
};
