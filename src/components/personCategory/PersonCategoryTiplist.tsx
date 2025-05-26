import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonCategoryListData } from "../../dto/personCategory/PersonCategoryListData";
import { PersonCategoryListRQ } from "../../rq/personCategory/PersonCategoryListRQ";

/**
 * Person category tiplist properties
 * 人员分类提示列表属性
 */
export type PersonCategoryTiplistProps = Omit<
  TiplistProps<PersonCategoryListData, "id">,
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
  rq?: Partial<PersonCategoryListRQ>;
};

/**
 * Person category tiplist
 * 人员分类提示列表
 * @param props Properties
 * @returns Component
 */
export function PersonCategoryTiplist(props: PersonCategoryTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("category")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name,
    name = "categoryId",
    rq = {},
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<PersonCategoryListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.personCategoryApi.list(
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
