import { EntityStatus } from "@etsoo/appscript";
import { PersonRelationType } from "./PersonRelationType";

/**
 * Contact query data
 * 联系人查询数据
 */
export type ContactQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Relation type
   * 关系类型
   */
  relationType: PersonRelationType;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Description
   * 描述
   */
  description?: string;

  /**
   * Creation
   * 登记时间
   */
  creation: string | Date;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;
};
