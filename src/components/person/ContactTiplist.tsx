import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonContactItem } from "../../dto/personContact/PersonContactItem";
import { ContactListRQ } from "../../rq/personContact/ContactListRQ";

/**
 * Contact tiplist properties
 * 联系人提示列表属性
 */
export type ContactTiplistProps = Omit<
  TiplistProps<PersonContactItem, "id">,
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
   * Person id
   */
  personId: number;

  /**
   * Default request data
   */
  rq?: Partial<ContactListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: ContactListRQ) => ContactListRQ;
};

/**
 * Contact tiplist
 * 联系人提示列表
 * @param props Properties
 * @returns Component
 */
export function ContactTiplist(props: ContactTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("contact")!,
    maxItems = 10,
    getOptionLabel = (data) =>
      `${data.name}${data.relationType > 0 ? crm.person.getRelationType(data.relationType) : ""}`,
    onLoadData = (rq) => rq,
    name = "contactId",
    personId,
    rq = {},
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<PersonContactItem>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.personContactApi.list(
          onLoadData({
            ...rq,
            personId,
            keyword,
            id,
            queryPaging: {
              batchSize: maxItems
            }
          }),
          { showLoading: false, defaultValue: [] }
        )
      }
      {...rest}
    />
  );
}
