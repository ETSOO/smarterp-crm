import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { PersonDuplicateTestData } from "../../dto/person/PersonDuplicateTestData";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";

export type AddressDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;
};

export function AddressDuplicateTest(props: AddressDuplicateTestProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    minChars = 3,
    name = "formattedAddress",
    label = crm.app.get("addressFormatted"),
    ...rest
  } = props;

  return (
    <InputTipField<PersonDuplicateTestData>
      componentProps={{
        loadData: async (value) => {
          const result = await crm.personApi.duplicateTest(
            {
              excludedId,
              address: value
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
      label={label}
      name={name}
      {...rest}
    />
  );
}
