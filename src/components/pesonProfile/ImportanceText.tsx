import { Typography, TypographyProps } from "@mui/material";
import { useRequiredCrmApp } from "../../CrmApp";
import { PersonProfileImportance } from "../../dto/personProfile/PersonProfileImportance";

/**
 * Get importance color
 * 获取重要性颜色
 * @param importance Importance
 * @returns Color
 */
export function getImportanceColor(
  importance?: PersonProfileImportance
): TypographyProps["color"] {
  switch (importance) {
    case PersonProfileImportance.Urgent:
      return "error";
    case PersonProfileImportance.Important:
      return "warning";
    default:
      return undefined;
  }
}

/**
 * Importance text properties
 * 重要性文本属性
 */
export type ImportanceTextProps = TypographyProps & {
  /**
   * Importance
   * 重要性
   */
  importance?: PersonProfileImportance;
};

/**
 * Importance text
 * 重要性文本
 * @param props Properties
 * @returns Component
 */
export function ImportanceText(props: ImportanceTextProps) {
  // CRM app
  const crm = useRequiredCrmApp();

  // Destruct
  const {
    importance,
    component = "span",
    color = getImportanceColor(importance),
    variant = "body2",
    ...rest
  } = props;

  // Layout
  return (
    <Typography component={component} color={color} variant={variant} {...rest}>
      {crm.profile.getImportance(importance)}
    </Typography>
  );
}
