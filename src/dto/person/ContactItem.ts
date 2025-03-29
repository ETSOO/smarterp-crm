import { IdentityTypeFlags } from "@etsoo/appscript";

/**
 * Identity type data
 * 身份类型数据
 */
export type IdentityTypeData = {
  /**
   * Identity type
   */
  identityType?: IdentityTypeFlags;

  /**
   * Is organization
   */
  isOrg: boolean;
};

/**
 * Contact item
 * 联系人项
 */
export type ContactItem = IdentityTypeData & {
  /**
   * Id
   */
  id: number;

  /**
   * Name
   */
  name: string;

  /*
   * Preferred name
   */
  preferredName?: string;
};
