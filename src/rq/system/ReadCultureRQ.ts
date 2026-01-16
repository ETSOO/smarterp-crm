import { CustomCultureKind } from "../../dto/system/CustomCultureKind";

/**
 * Read culture request data
 * 读取请求数据
 */
export interface ReadCultureRQ {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Culture
   * 文化
   */
  culture: string;

  /**
   * Kind
   * 类型
   */
  kind: CustomCultureKind;
}
