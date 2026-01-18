import { TagListPro, TagListProProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ProductListData } from "../../dto/product/ProductListData";
import { ProductListRQ } from "../../rq/product/ProductListRQ";
import { ProductUtils } from "../../utils/Product";

/**
 * Multiple products list properties
 * 多产品列表属性
 */
export type ProductsListProps = Omit<
  TagListProProps<ProductListData>,
  "loadData"
> & {
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
 * Multiple product list
 * 多产品列表
 * @param props Properties
 * @returns Component
 */
export function ProductsList(props: ProductsListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    getOptionLabel = ProductUtils.getListLabel(crm),
    onLoadData = (rq) => rq,
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <TagListPro<ProductListData>
      getOptionLabel={getOptionLabel}
      loadData={(keyword, items) =>
        crm.productApi.list(
          onLoadData({
            ...rq,
            keyword,
            queryPaging: {
              batchSize: items
            }
          }),
          { showLoading: false }
        )
      }
      {...rest}
    />
  );
}
