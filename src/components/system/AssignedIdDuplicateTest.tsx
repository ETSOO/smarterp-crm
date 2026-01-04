import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { PersonDuplicateTestData } from "../../dto/person/PersonDuplicateTestData";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";

export type AssignedIdDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;
};

export function AssignedIdDuplicateTest(props: AssignedIdDuplicateTestProps) {
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
    <InputTipField<PersonDuplicateTestData>
      componentProps={{
        loadData: async (value) => {
          const result = await crm.personApi.duplicateTest(
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
        itemLabel: PersonUtils.getDuplicateLabel(crm)
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
