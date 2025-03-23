import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { PersonListDto } from "../../dto/person/PersonListDto";
import { PersonListRQ } from "../../rq/person/PersonListRQ";
import { useRequiredCrmContext } from "../../CrmApp";

/**
 * Person tiplist properties
 * 人员提示列表属性
 */
export type PersonTiplistProps = Omit<
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
 * Person tiplist
 * 人员提示列表
 * @param props Properties
 * @returns Component
 */
export function PersonTiplist(props: PersonTiplistProps) {
  // CRM app
  const crm = useRequiredCrmContext();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("user")!,
    maxItems = 10,
    getOptionLabel = (data) => data.name,
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
