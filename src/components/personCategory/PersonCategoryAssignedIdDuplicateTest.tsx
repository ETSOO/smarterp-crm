import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";
import { PersonCategoryDuplicateTestData } from "../../dto/personCategory/PersonCategoryDuplicateTestData";

export type PersonCategoryAssignedIdDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;
};

export function PersonCategoryAssignedIdDuplicateTest(
  props: PersonCategoryAssignedIdDuplicateTestProps
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
    <InputTipField<PersonCategoryDuplicateTestData>
      componentProps={{
        loadData: async (value) => {
          const result = await crm.personCategoryApi.duplicateTest(
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
        itemLabel: PersonUtils.getCategoryDuplicateLabel(crm)
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
