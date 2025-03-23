import { EntityStatus } from "@etsoo/appscript";
import { PersonListDto } from "./PersonListDto";

/**
 * Person query data
 * 成员查询数据
 */
export type PersonQueryData = PersonListDto & {
  /**
   * Assigned id
   */
  assignedId?: string;

  /**
   * Job title
   */
  jobTitle?: string;

  /**
   * Status
   */
  status: EntityStatus;

  /**
   * Creation
   */
  creation: Date | string;
};
