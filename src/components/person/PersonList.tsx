import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { PersonListDto } from "../../dto/person/PersonListDto";
import { PersonListRQ } from "../../rq/person/PersonListRQ";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";

/**
 * Person list properties
 * 人员提示列表属性
 */
export type PersonListProps = Omit<
  TiplistProps<PersonListDto, "id">,
  "loadData" | "label" | "name"
> & {
  /**
   * Label
   */
  label?: string;

  /**
   * Name
   */
  name?: string;

  /**
   * Default request data
   */
  rq?: Partial<PersonListRQ>;
};

/**
 * Person list
 * 人员提示列表
 * @param props Properties
 * @returns Component
 */
export function PersonList(props: PersonListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("user")!,
    maxItems = 10,
    getOptionLabel = PersonUtils.getListLabel(crm),
    name = "personId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<PersonListDto>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.personApi.list(
          {
            ...rq,
            keyword,
            id,
            queryPaging: {
              batchSize: maxItems
            }
          },
          { showLoading: false, defaultValue: [] }
        )
      }
      {...rest}
    />
  );
}
