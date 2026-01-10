import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ProductDuplicateTestData } from "../../dto/product/ProductDuplicateTestData";

export type ProductAssignedIdDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;
};

export function ProductAssignedIdDuplicateTest(
  props: ProductAssignedIdDuplicateTestProps
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    changeDelay = [480, 3],
    name = "assignedId",
    label = crm.app.get("assignedId"),
    slotProps = {},
    ...rest
  } = props;

  const { htmlInput, ...otherSlotProps } = slotProps;

  return (
    <InputTipField<ProductDuplicateTestData>
      componentProps={{
        loadData: async (value) => {
          const result = await crm.productApi.duplicateTest(
            {
              excludedId,
              assignedId: value
            },
            {
              showLoading: false
            }
          );
          if (result == null || result.length === 0) return [];
          return [result, result.length.toString()];
        },
        itemLabel: crm.product.duplicateLabel
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
