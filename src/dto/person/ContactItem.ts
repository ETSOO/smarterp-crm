import { IdentityTypeData } from "./IdentityTypeData";
import { PersonListItem } from "./PersonListItem";

/**
 * Contact item
 * 联系人项
 */
export type ContactItem = IdentityTypeData &
  PersonListItem & {
    /**
     * Id
     */
    id: number;

    /*
     * Preferred name
     */
    preferredName?: string;
  };
