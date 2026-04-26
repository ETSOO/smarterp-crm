import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { OrderPaymentListData } from "../../dto/orderPayment/OrderPaymentListData";
import { OrderPaymentListRQ } from "../..";

/**
 * Order payment tiplist properties
 * 订单支付方式提示列表属性
 */
export type OrderPaymentTiplistProps = Omit<
  TiplistProps<OrderPaymentListData, "id">,
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
  rq?: Partial<OrderPaymentListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: OrderPaymentListRQ) => OrderPaymentListRQ;
};

/**
 * Order payment tiplist
 * 订单支付方式提示列表
 * @param props Properties
 * @returns Component
 */
export function OrderPaymentTiplist(props: OrderPaymentTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("orderPayments")!,
    maxItems = 10,
    getOptionLabel = (data) => data.title,
    onLoadData = (rq) => rq,
    name = "paymentId",
    rq,
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<OrderPaymentListData, "id">
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.orderPaymentApi.list(
          onLoadData({
            isOrder: true,
            isValid: true,
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
