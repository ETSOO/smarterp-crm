import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { OrderDuplicateTestData } from "../../dto/order/OrderDuplicateTestData";

export type OrderSourceIdDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;

  /**
   * Is order or not
   * 是否为订单
   */
  isOrder?: boolean;
};

export function OrderSourceIdDuplicateTest(
  props: OrderSourceIdDuplicateTestProps
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    isOrder,
    changeDelay = [480, 3],
    name = "sourceId",
    label = crm.app.get("orderSourceId"),
    slotProps = {},
    ...rest
  } = props;

  const { htmlInput, ...otherSlotProps } = slotProps;

  return (
    <InputTipField<OrderDuplicateTestData>
      componentProps={{
        loadData: async (value) => {
          const result = await crm.orderApi.duplicateTest(
            {
              excludedId,
              isOrder,
              sourceId: value
            },
            {
              showLoading: false
            }
          );
          if (result == null || result.length === 0) return [];
          return [result, result.length.toString()];
        },
        itemLabel: (item) => `${item.title} (${item.id})`
      }}
      changeDelay={changeDelay}
      label={label}
      name={name}
      slotProps={{
        htmlInput: {
          maxLength: 20,
          style: { textTransform: "uppercase" },
          ...htmlInput
        },
        ...otherSlotProps
      }}
      {...rest}
    />
  );
}
