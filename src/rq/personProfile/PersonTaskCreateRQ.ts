import { PersonProfileCreateRQ } from "./PersonProfileCreateRQ";

/**
 * Person task create request data
 * 人员任务创建请求数据
 */
export type PersonTaskCreateRQ = Omit<
  PersonProfileCreateRQ,
  "personId" | "kind"
> & {};
