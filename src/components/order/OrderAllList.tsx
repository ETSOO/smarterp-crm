import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { OrderListData } from "../../dto/order/OrderListData";
import { OrderListRQ } from "../../rq/order/OrderListRQ";

/**
 * Order all list properties
 * 订单与采购单提示列表属性
 */
export type OrderAllListProps = Omit<
  TiplistProps<OrderListData, "id">,
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
  rq?: Partial<OrderListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: OrderListRQ) => OrderListRQ;
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
    <Tiplist<OrderListData>
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
