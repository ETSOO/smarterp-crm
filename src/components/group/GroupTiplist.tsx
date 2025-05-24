import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { GroupListData } from "../../dto/group/GroupListData";
import { GroupListRQ } from "../../rq/group/GroupListRQ";

/**
 * Permission group tiplist properties
 * 权限组提示列表属性
 */
export type GroupTiplistProps = Omit<
  TiplistProps<GroupListData, "id">,
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
  rq?: Partial<GroupListRQ>;
};

/**
 * Permission group tiplist
 * 权限组提示列表
 * @param props Properties
 * @returns Component
 */
export function GroupTiplist(props: GroupTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("permissionGroup")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name,
    name = "groupId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<GroupListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.groupApi.list(
          {
            ...rq,
            keyword,
            id,
            queryPaging: {
              batchSize: maxItems
            }
          },
          { showLoading: false, defaultValue: [] }
        )
      }
      {...rest}
    />
  );
}
