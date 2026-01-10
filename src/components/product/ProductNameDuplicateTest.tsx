import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ProductDuplicateTestData } from "../../dto/product/ProductDuplicateTestData";

export type ProductNameDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;
};

export function ProductNameDuplicateTest(props: ProductNameDuplicateTestProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    changeDelay = [480, 2],
    label = crm.app.get("productName"),
    name = "name",
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
              name: value
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
        htmlInput: { maxLength: 256, ...htmlInput },
        ...otherSlotProps
      }}
      {...rest}
    />
  );
}
