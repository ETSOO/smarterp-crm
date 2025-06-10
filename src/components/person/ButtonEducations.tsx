import { ListType } from "@etsoo/shared";
import React from "react";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonEducation } from "../../dto/person/PersonEducation";
import { ButtonPopupRadio, ButtonPopupRadioProps } from "@etsoo/materialui";

export type ButtonEducationsProps = Omit<
  ButtonPopupRadioProps<ListType>,
  "labelField" | "loadData" | "value" | "onValueChange"
> & {
  /**
   * Value
   * 值
   */
  value?: PersonEducation;

  /**
   * Value change handler
   * @param value New value
   */
  onValueChange: (value: PersonEducation) => void;
};

export function ButtonEducations(props: ButtonEducationsProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("clickToChoose", "personEducation");

  // Destruct
  const {
    inputName = "education",
    label = labels.personEducation,
    labelEnd = labels.clickToChoose,
    onValueChange,
    value,
    ...rest
  } = props;

  // Educations
  const educations = React.useMemo(() => crm.person.getEducations(), []);

  return (
    <ButtonPopupRadio<ListType>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => data.label}
      labelEnd={labelEnd}
      labelField="label"
      loadData={educations}
      onValueChange={(value) => onValueChange(value)}
      value={value}
      {...rest}
    />
  );
}
