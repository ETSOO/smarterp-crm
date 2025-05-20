import { AppModule } from "../system/AppModule";

export type GroupQueryItemsData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Module
   * 模块
   */
  module: AppModule;

  /**
   * Name
   * 名称
   */
  name: string;
};
