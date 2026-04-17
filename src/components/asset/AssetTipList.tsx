import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { AssetListData } from "../../dto/asset/AssetListData";
import { AssetListRQ } from "../../rq/asset/AssetListRQ";

/**
 * Asset list properties
 * 资产提示列表属性
 */
export type AssetListProps = Omit<
  TiplistProps<AssetListData, "id">,
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
  rq?: Partial<AssetListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: AssetListRQ) => AssetListRQ;
};

/**
 * Asset list
 * 资产提示列表
 * @param props Properties
 * @returns Component
 */
export function AssetList(props: AssetListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("asset")!,
    maxItems = 10,
    getOptionLabel = (option) =>
      `${option.sn} / ${crm.app.formatDate(option.expiry)}`,
    onLoadData = (rq) => rq,
    name = "assetId",
    rq = { enabled: true },
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<AssetListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.assetApi.list(
          onLoadData({
            ...rq,
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
