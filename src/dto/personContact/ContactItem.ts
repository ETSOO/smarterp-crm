import { IdentityTypeData } from "../person/IdentityTypeData";
import { PersonListItem } from "../person/PersonListItem";

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
