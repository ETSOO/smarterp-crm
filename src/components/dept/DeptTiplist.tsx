import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { DeptListData } from "../../dto/dept/DeptListData";
import { DeptListRQ } from "../../rq/dept/DeptListRQ";

/**
 * Dept tiplist properties
 * 部门提示列表属性
 */
export type DeptTiplistProps = Omit<
  TiplistProps<DeptListData, "id">,
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
  rq?: Partial<DeptListRQ>;
};

/**
 * Dept tiplist
 * 部门提示列表
 * @param props Properties
 * @returns Component
 */
export function DeptTiplist(props: DeptTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("dept")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name,
    name = "deptId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<DeptListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.deptApi.list(
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
