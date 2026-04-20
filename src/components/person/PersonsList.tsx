import { TagListPro, TagListProProps } from "@etsoo/materialui";
import { PersonListDto } from "../../dto/person/PersonListDto";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";
import { PersonListRQ } from "../../rq/person/PersonListRQ";

/**
 * Multiple persons list properties
 * 多人员列表属性
 */
export type PersonsListProps = Omit<
  TagListProProps<PersonListDto>,
  "loadData"
> & {
  /**
   * Default request data
   */
  rq?: Partial<PersonListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: PersonListRQ) => PersonListRQ;
};

/**
 * Multiple persons list
 * 多人员列表
 * @param props Properties
 * @returns Component
 */
export function PersonsList(props: PersonsListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    rq = {},
    getOptionLabel = rq.identityType
      ? PersonUtils.getSimpleListLabel()
      : PersonUtils.getListLabel(crm),
    onLoadData = (rq) => rq,
    ...rest
  } = props;

  // Layout
  return (
    <TagListPro<PersonListDto>
      getOptionLabel={getOptionLabel}
      loadData={(keyword, items) =>
        crm.personApi.list(
          onLoadData({
            enabled: true,
            ...rq,
            keyword,
            queryPaging: {
              batchSize: items
            }
          }),
          { showLoading: false }
        )
      }
      {...rest}
    />
  );
}
