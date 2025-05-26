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
      loadData={async (ids) => {
        const data = await crm.personCategoryApi.list(
          { queryPaging: 64 },
          { showLoading: false }
        );
        if (ids != null && data != null) {
          // Sort data based on the order of ids
          return data.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
        }
        return data ?? [];
      }}
      {...rest}
    />
  );
}
