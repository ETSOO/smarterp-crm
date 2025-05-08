import { AppModule } from "./AppModule";

/**
 * Permission item
 * 权限项
 */
export type PermissionItem = {
  /**
   * Id
   * 编号
   */
  id: number; // short in C# maps to number in TypeScript

  /**
   * Module
   * 模块
   */
  module: AppModule; // Enum remains the same

  /**
   * Name
   * 名称
   */
  name: string; // required string in C# maps to string in TypeScript
};
