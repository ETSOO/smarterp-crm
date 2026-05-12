import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { OrderDuplicateTestData } from "../../dto/order/OrderDuplicateTestData";
import { OrderKind } from "../../dto/order/OrderKind";

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
   * Kind
   * 类型
   */
  kind?: OrderKind;
};

export function OrderSourceIdDuplicateTest(
  props: OrderSourceIdDuplicateTestProps
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    kind,
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
              kind,
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
