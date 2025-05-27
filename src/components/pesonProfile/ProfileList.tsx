import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonProfileListRQ } from "../../rq/personProfile/PersonProfileListRQ";
import { PersonProfileListData } from "../../dto/personProfile/PersonProfileListData";
import { PersonProfileUtils } from "../../utils/PersonProfile";

/**
 * Person profile list properties
 * 人员档案提示列表属性
 */
export type ProfileListProps = Omit<
  TiplistProps<PersonProfileListData, "id">,
  "loadData" | "label" | "name"
> & {
  /**
   * Label
   */
  label?: string;

  /**
   * Name
   */
  name?: string;

  /**
   * Default request data
   */
  rq?: Partial<PersonProfileListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: PersonProfileListRQ) => PersonProfileListRQ;
};

/**
 * Person profile list
 * 人员档案提示列表
 * @param props Properties
 * @returns Component
 */
export function ProfileList(props: ProfileListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("profile")!,
    maxItems = 10,
    getOptionLabel = PersonProfileUtils.getListLabel(crm),
    onLoadData = (rq) => rq,
    name = "profileId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<PersonProfileListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.profileApi.list(
          onLoadData({
            ...rq,
            keyword,
            id,
            queryPaging: {
              batchSize: maxItems
            }
          }),
          { showLoading: false, defaultValue: [] }
        )
      }
      {...rest}
    />
  );
}
