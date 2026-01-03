import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { PersonDuplicateTestData } from "../../dto/person/PersonDuplicateTestData";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";

export type NameDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;
};

export function NameDuplicateTest(props: NameDuplicateTestProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    minChars = 2,
    name = "name",
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
              name: value
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
      minChars={minChars}
      name={name}
      slotProps={{
        htmlInput: { maxLength: 128, ...htmlInput },
        ...otherSlotProps
      }}
      {...rest}
    />
  );
}
