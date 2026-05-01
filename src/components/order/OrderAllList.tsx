import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { OrderListAllRQ } from "../../rq/order/OrderListAllRQ";
import { OrderListAllData } from "../../dto/order/OrderListAllData";

/**
 * Order all list properties
 * 订单与采购单提示列表属性
 */
export type OrderAllListProps = Omit<
  TiplistProps<OrderListAllData, "id">,
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
  rq?: Partial<OrderListAllRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: OrderListAllRQ) => OrderListAllRQ;
};

/**
 * Order all list
 * 订单与采购单提示列表
 * @param props Properties
 * @returns Component
 */
export function OrderAllList(props: OrderAllListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("order")!,
    maxItems = 10,
    getOptionLabel = (item) => `${item.title} (${item.id})`,
    onLoadData = (rq) => rq,
    name = "orderId",
    rq,
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<OrderListAllData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.orderApi.listAll(
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
