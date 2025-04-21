import { IdentityTypeFlags } from "@etsoo/appscript";

export type IdentityTypeDataBase = {
  /**
   * Name
   */
  name: string;

  /**
   * Identity type
   */
  identityType: IdentityTypeFlags;
};

export type IdentityTypeData = IdentityTypeDataBase & {
  /**
   * Owner
   */
  owner?: IdentityTypeDataBase;
};
