import { ComboBox, ComboBoxProps } from "@etsoo/materialui";
import { useRequiredCrmApp } from "../../CrmApp";

/**
 * Person address kind list properties
 * 人员地址类型列表属性
 */
export type AddressKindListProps = Omit<
  ComboBoxProps,
  "options" | "name" | "label"
> & {
  /**
   * Label
   */
  label?: string;

  /**
   * Name
   */
  name?: string;
};

/**
 * Person address kind list component
 * 人员地址类型列表组件
 */
export function AddressKindList(props: AddressKindListProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    fullWidth = true,
    label = crm.app.get("type")!,
    name = "kind",
    ...rest
  } = props;

  return (
    <ComboBox
      fullWidth={fullWidth}
      name={name}
      label={label}
      options={crm.personAddress.getAddressKinds()}
      {...rest}
    />
  );
}
