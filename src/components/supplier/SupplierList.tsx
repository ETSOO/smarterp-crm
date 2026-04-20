import { useRequiredCrmApp } from "../../CrmApp";
import { SupplierListData } from "../../dto/supplier/SupplierListData";
import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { SupplierListRQ } from "../../rq/supplier/SupplierListRQ";

/**
 * Supplier list properties
 * 供应商提示列表属性
 */
export type SupplierListProps = Omit<
  TiplistProps<SupplierListData, "id">,
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
  rq?: Partial<SupplierListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: SupplierListRQ) => SupplierListRQ;
};

/**
 * Supplier tiplist
 * @param props Props
 * @returns Component
 */
export function SupplierList(props: SupplierListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("supplier")!,
    maxItems = 10,
    rq,
    getOptionLabel = (option) => option.name,
    onLoadData = (rq) => rq,
    name = "supplierId",
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<SupplierListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.supplierApi.list(
          onLoadData({
            enabled: true,
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
