import { ButtonPopupRadio, ButtonPopupRadioProps } from "@etsoo/materialui";
import { ListType } from "@etsoo/shared";
import React from "react";
import { useRequiredCrmApp } from "../../CrmApp";

export type ButtonRadioContactRelationsProps = Omit<
  ButtonPopupRadioProps<ListType>,
  "labelField" | "loadData"
> & {
  /**
   * Is legal person
   * 是否为法人
   */
  isLegalPerson?: boolean | null;
};

export function ButtonRadioContactRelations(
  props: ButtonRadioContactRelationsProps
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("clickToChoose", "relation");

  // Destruct
  const {
    inputName = "region",
    label = labels.relation,
    labelEnd = labels.clickToChoose,
    isLegalPerson,
    ...rest
  } = props;

  return (
    <ButtonPopupRadio<ListType>
      inputName={inputName}
      label={label}
      labelEnd={labelEnd}
      labelField="label"
      loadData={() =>
        Promise.resolve(crm.person.getRelationTypes(isLegalPerson))
      }
      {...rest}
    />
  );
}
