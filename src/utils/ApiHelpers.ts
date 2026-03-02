import { CustomFieldData, IApi, IApiPayload } from "@etsoo/appscript";

export namespace ApiHelpers {
  /**
   * Check if data is CustomFieldData
   * @param data Data
   * @returns Result
   */
  export function isCustomFieldData(data: any): data is CustomFieldData {
    return data && typeof data === "object" && "type" in data && "name" in data;
  }

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
      parser: (raw): [Error?, CustomFieldData[]?] => {
        if (!raw) return [undefined, []];

        if (Array.isArray(raw) && raw.length > 0) {
          if (Array.isArray(raw[0])) {
            return [
              undefined,
              raw.flatMap((item) => item as CustomFieldData[])
            ];
          } else if (isCustomFieldData(raw[0])) {
            return [undefined, raw as CustomFieldData[]];
          } else if (typeof raw[0] === "string") {
            return [
              undefined,
              raw.flatMap((item) => {
                try {
                  const parsed = JSON.parse(item);
                  if (
                    Array.isArray(parsed) &&
                    parsed.length > 0 &&
                    isCustomFieldData(parsed[0])
                  ) {
                    return parsed as CustomFieldData[];
                  } else {
                    return [];
                  }
                } catch (e) {
                  console.error("Failed to parse item:", item, e);
                  return [];
                }
              })
            ];
          } else return [];
        } else if (
          typeof raw === "string" &&
          raw.startsWith("[") &&
          raw.endsWith("]")
        ) {
          try {
            return [undefined, JSON.parse(raw) as CustomFieldData[]];
          } catch (e) {
            console.error("Failed to parse raw string:", raw, e);
            return [undefined, []];
          }
        }

        return [undefined, []];
      },
      ...payload,
      contentType: "application/json"
    });

    if (result == null || result.length === 0) {
      return undefined;
    }

    return result;
  }
}
