import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ProductCategoryDuplicateTestData } from "../../dto/productCategory/ProductCategoryDuplicateTestData";
import { ProductUtils } from "../../utils/Product";

export type ProductCategoryAssignedIdDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;
};

export function ProductCategoryAssignedIdDuplicateTest(
  props: ProductCategoryAssignedIdDuplicateTestProps
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    name = "assignedId",
    label = crm.app.get("assignedId"),
    slotProps = {},
    ...rest
  } = props;

  const { htmlInput, ...otherSlotProps } = slotProps;

  return (
    <InputTipField<ProductCategoryDuplicateTestData>
      componentProps={{
        loadData: async (value) => {
          const result = await crm.productCategoryApi.duplicateTest(
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
        itemLabel: ProductUtils.getCategoryDuplicateLabel(crm)
      }}
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
