import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { PersonDuplicateTestData } from "../../dto/person/PersonDuplicateTestData";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";
import { PersonInfoKind } from "../../dto/person/PersonInfoKind";
import { DataTypes } from "@etsoo/shared";

export type InfoDuplicateTestProps = Omit<
  InputTipFieldProps,
  "componentProps"
> & {
  /**
   * Excluded id
   * 排除的编号
   */
  excludedId?: number;

  /**
   * Info kind
   * 信息类型
   */
  infoKind: PersonInfoKind | (() => PersonInfoKind);
};

export function InfoDuplicateTest(props: InfoDuplicateTestProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    excludedId,
    infoKind,
    minChars = 3,
    name = typeof infoKind === "function"
      ? undefined
      : DataTypes.getEnumKey(PersonInfoKind, infoKind)?.toLowerCase(),
    label = typeof infoKind === "function"
      ? undefined
      : crm.person.getInfoKind(infoKind),
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
              infoKind: typeof infoKind === "function" ? infoKind() : infoKind,
              identifier: value
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
      slotProps={{
        htmlInput: { maxLength: 256, ...htmlInput },
        ...otherSlotProps
      }}
      {...rest}
    />
  );
}
