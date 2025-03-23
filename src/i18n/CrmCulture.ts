/**
 * CRM culture
 */
export namespace CrmCulture {
  /**
   * Get en neutral culture
   */
  export const en = () => import("./en.json");

  /**
   * Get zh-Hans neutral cultrue
   * @returns Full culture
   */
  export const zhHans = () => import("./zh-Hans.json");

  /**
   * Get zh-Hant neutral cultrue
   * @returns Full culture
   */
  export const zhHant = () => import("./zh-Hant.json");
}
