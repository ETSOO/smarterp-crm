import { Tiplist, TiplistProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";
import { FinanceAccountListRQ } from "../../rq/financeAccount/FinanceAccountListRQ";
import { FinanceAccountListData } from "../../dto/financeAccount/FinanceAccountListData";
/**
 * Account tiplist properties
 * 账户提示列表属性
 */
export type AccountTiplistProps = Omit<
  TiplistProps<FinanceAccountListData, "id">,
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
  rq?: Partial<FinanceAccountListRQ>;

  /**
   * Load data handler
   * @param rq Request data
   */
  onLoadData?: (rq: FinanceAccountListRQ) => FinanceAccountListRQ;
};

/**
 * Account tiplist
 * 账户提示列表
 * @param props Properties
 * @returns Component
 */
export function AccountTiplist(props: AccountTiplistProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("account")!,
    maxItems = 10,
    getOptionLabel = (data) =>
      `[${crm.finance.getAccountKind(data.kind)}] ${data.accountNumber}, ${data.bank}`,
    onLoadData = (rq) => rq,
    name = "accountId",
    rq,
    ...rest
  } = props;

  // Layout
  return (
    <Tiplist<FinanceAccountListData>
      label={label}
      getOptionLabel={getOptionLabel}
      name={name}
      fullWidth={fullWidth}
      maxItems={maxItems}
      loadData={(keyword, id, maxItems) =>
        crm.financeAccountApi.list(
          onLoadData({
            enabled: true,
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
