import { useRequiredCrmApp } from "../../CrmApp";
import {
  ButtonPopupCheckbox,
  ButtonPopupCheckboxProps
} from "@etsoo/materialui";
import { PersonCategoryListData } from "../../dto/personCategory/PersonCategoryListData";

export function ButtonPersonCategories(
  props: Omit<
    ButtonPopupCheckboxProps<PersonCategoryListData>,
    "labelField" | "loadData"
  >
) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Labels
  const labels = crm.app.getLabels("clickToChoose", "categories");

  // Destruct
  const {
    inputName = "categories",
    label = labels.categories,
    labelEnd = labels.clickToChoose,
    ...rest
  } = props;

  return (
    <ButtonPopupCheckbox<PersonCategoryListData>
      inputName={inputName}
      label={label}
      labelFormatter={(data) => data.name}
      labelEnd={labelEnd}
      labelField="name"
      loadData={async () =>
        (await crm.personCategoryApi.list(
          { queryPaging: 64 },
          { showLoading: false }
        )) ?? []
      }
      {...rest}
    />
  );
}
