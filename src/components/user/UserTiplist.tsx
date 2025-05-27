import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { UserListData } from "../../dto/user/UserListData";
import { UserListRQ } from "../../rq/user/UserListRQ";
import { useRequiredCrmApp } from "../../CrmApp";

/**
 * User tiplist properties
 * 用户提示列表属性
 */
export type UserTiplistProps = Omit<
  TiplistProps<UserListData, "id">,
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
  rq?: Partial<UserListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: UserListRQ) => UserListRQ;
};

/**
 * User tiplist
 * 用户提示列表
 * @param props Properties
 * @returns Component
 */
export function UserTiplist(props: UserTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("user")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name,
    onLoadData = (rq) => rq,
    name = "userId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<UserListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.userApi.list(
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
