import { CustomFieldData, IApi, IApiPayload } from "@etsoo/appscript";

export namespace ApiHelpers {
  /**
   * Post get attributes
   * @param api API
   * @param flag API flag
   * @param ids Category IDs
   * @param payload Payload
   * @returns Result
   */
  export async function postGetAttributes(
    api: IApi,
    flag: string,
    ids: number[],
    payload?: IApiPayload<CustomFieldData[]>
  ) {
    const result = await api.post(`${flag}/GetAttributes`, ids, {
      contentType: "application/json",
      ...payload
    });

    if (result == null || result.length === 0) {
      return undefined;
    }

    return result.map((item) =>
      typeof item === "string" ? (JSON.parse(item) as CustomFieldData) : item
    );
  }
}
