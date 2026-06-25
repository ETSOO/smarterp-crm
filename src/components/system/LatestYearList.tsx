import { SelectEx, SelectExProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { ListType } from "@etsoo/shared";

export type LatestYearListProps = Omit<
  SelectExProps<ListType>,
  "options" | "loadData"
> & {
  /**
   * Years to show
   */
  years?: number;
};

/**
 * Latest year list component
 * @param props Props
 * @returns Component
 */
export function LatestYearList(props: LatestYearListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    label = crm.app.get("year"),
    labelField = "name",
    name = "year",
    years = 5,
    value,
    ...rest
  } = props;

  const length = years > 1 ? years : 5;
  const currentYear = new Date().getFullYear();
  const items = Array.from({ length }, (_, i) => ({
    id: currentYear - i,
    label: (currentYear - i).toString()
  }));

  const localValue = value === 0 ? currentYear : value;

  // Layout
  return (
    <SelectEx
      label={label}
      name={name}
      options={items}
      value={localValue}
      {...rest}
    />
  );
}
