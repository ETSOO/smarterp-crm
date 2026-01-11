import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ProductCategoryListData } from "../../dto/productCategory/ProductCategoryListData";
import { ProductCategoryListRQ } from "../../rq/productCategory/ProductCategoryListRQ";

/**
 * Product category tiplist properties
 * 产品分类提示列表属性
 */
export type ProductCategoryTiplistProps = Omit<
  TiplistProps<ProductCategoryListData, "id">,
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
  rq?: Partial<ProductCategoryListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: ProductCategoryListRQ) => ProductCategoryListRQ;
};

/**
 * Product category tiplist
 * 产品分类提示列表
 * @param props Properties
 * @returns Component
 */
export function ProductCategoryTiplist(props: ProductCategoryTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("category")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name,
    onLoadData = (rq) => rq,
    name = "categoryId",
    rq = {},
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<ProductCategoryListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.productCategoryApi.list(
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
