import { InputTipField, InputTipFieldProps } from "@etsoo/materialui";
import { PersonDuplicateTestData } from "../../dto/person/PersonDuplicateTestData";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";
import { PersonInfoKind } from "../../dto/person/PersonInfoKind";
import { DataTypes } from "@etsoo/shared";

export type EntityDuplicateTestProps = Omit<
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
  infoKind?: PersonInfoKind;
};

export function EntityDuplicateTest(props: EntityDuplicateTestProps) {
  // Destruct
  const {
    excludedId,
    infoKind,
    name = infoKind == null
      ? "name"
      : DataTypes.getEnumKey(PersonInfoKind, infoKind)?.toLowerCase(),
    ...rest
  } = props;

  // CRM app
  const crm = useRequiredCrmApp();

  return (
    <InputTipField<PersonDuplicateTestData>
      componentProps={{
        loadData: async (value) => {
          const result = await crm.personApi.duplicateTest(
            {
              excludedId,
              ...(infoKind == null
                ? { name: value }
                : { infoKind, identifier: value })
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
      name={name}
      {...rest}
    />
  );
}
