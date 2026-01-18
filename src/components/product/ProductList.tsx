import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ProductUtils } from "../../utils/Product";
import { ProductListData } from "../../dto/product/ProductListData";
import { ProductListRQ } from "../../rq/product/ProductListRQ";

/**
 * Product list properties
 * 产品提示列表属性
 */
export type ProductListProps = Omit<
  TiplistProps<ProductListData, "id">,
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
  rq?: Partial<ProductListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: ProductListRQ) => ProductListRQ;
};

/**
 * Product list
 * 产品提示列表
 * @param props Properties
 * @returns Component
 */
export function ProductList(props: ProductListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("product")!,
    maxItems = 10,
    getOptionLabel = ProductUtils.getListLabel(crm),
    onLoadData = (rq) => rq,
    name = "productId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<ProductListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.productApi.list(
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
