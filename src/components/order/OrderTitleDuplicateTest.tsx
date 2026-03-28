import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { OrderDuplicateTestData } from "../../dto/order/OrderDuplicateTestData";

export type OrderTitleDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;
};

export function OrderTitleDuplicateTest(props: OrderTitleDuplicateTestProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    changeDelay = [480, 2],
    name = "title",
    label = crm.app.get("title"),
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
              title: value
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
        htmlInput: { maxLength: 256, ...htmlInput },
        ...otherSlotProps
      }}
      {...rest}
    />
  );
}
