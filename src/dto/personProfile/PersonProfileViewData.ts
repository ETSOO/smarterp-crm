import { PersonProfileInnerViewData } from "./PersonProfileInnerViewData";
import { PersonProfileQueryData } from "./PersonProfileQueryData";

/**
 * Person profile view data
 * 个人档案查看数据
 */
export type PersonProfileViewData = PersonProfileInnerViewData &
  PersonProfileQueryData & {};
