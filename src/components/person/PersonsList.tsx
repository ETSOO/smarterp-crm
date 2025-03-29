import { TagListPro, TagListProProps } from "@etsoo/materialui";
import { PersonListDto } from "../../dto/person/PersonListDto";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonUtils } from "../../utils/Person";

/**
 * Multiple persons list properties
 * 多人员列表属性
 */
export type PersonsListProps = Omit<TagListProProps<PersonListDto>, "loadData">;

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
  const { getOptionLabel = PersonUtils.getListLabel(crm), ...rest } = props;

  // Layout
  return (
    <TagListPro<PersonListDto>
      getOptionLabel={getOptionLabel}
      loadData={(keyword, items) =>
        crm.personApi.list(
          {
            keyword,
            queryPaging: {
              batchSize: items
            }
          },
          { showLoading: false }
        )
      }
      {...rest}
    />
  );
}
