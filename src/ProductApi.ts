import {
  AppActionData,
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { ProductListRQ } from "./rq/product/ProductListRQ";
import { ProductListData } from "./dto/product/ProductListData";
import { ProductQueryRQ } from "./rq/product/ProductQueryRQ";
import { ProductQueryData } from "./dto/product/ProductQueryData";
import { ProductCreateRQ } from "./rq/product/ProductCreateRQ";
import { ProductUpdateRQ } from "./rq/product/ProductUpdateRQ";
import { ProductUpdateReadData } from "./dto/product/ProductUpdateReadData";
import { ProductDuplicateTestRQ } from "./rq/product/ProductDuplicateTestRQ";
import { ProductDuplicateTestData } from "./dto/product/ProductDuplicateTestData";
import { ProductUnitUpdateRQ } from "./rq/product/ProductUnitUpdateRQ";
import { ProductUnitItem } from "./dto/product/ProductUnitItem";
import { ProductViewData } from "./dto/product/ProductViewData";
import { ProductPriceItem } from "./dto/product/ProductPriceItem";
import { ProductUpdateLogoRQ } from "./rq/product/ProductUpdateLogoRQ";
import { QueryForSaleRQ } from "./rq/product/QueryForSaleRQ";
import { QueryForSaleData } from "./dto/product/QueryForSaleData";

/**
 * Product API
 */
export class ProductApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Product", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: ProductCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * Duplicate test
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  duplicateTest(
    rq: ProductDuplicateTestRQ,
    payload?: IApiPayload<ProductDuplicateTestData[]>
  ) {
    return this.api.post(`${this.flag}/DuplicateTest`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: ProductListRQ, payload?: IApiPayload<ProductListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: ProductQueryRQ, payload?: IApiPayload<ProductQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Query for sale
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryForSale(rq: QueryForSaleRQ, payload?: IApiPayload<QueryForSaleData[]>) {
    return this.api.post(`${this.flag}/QueryForSale`, rq, payload);
  }

  /**
   * Query product unit
   * @param payload Payload
   * @returns Result
   */
  queryUnit(payload?: IApiPayload<ProductUnitItem[]>) {
    return this.api.get(`${this.flag}/QueryUnit`, undefined, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<ProductViewData>) {
    return this.readBase(id, payload);
  }

  /**
   * Read price
   * @param id Id
   * @param currency Currency
   * @param payload Payload
   * @returns Result
   */
  readPrice(
    id: number,
    currency: string,
    payload?: IApiPayload<ProductPriceItem>
  ) {
    return this.api.get(
      `${this.flag}/ReadPrice/${id}/${currency}`,
      undefined,
      payload
    );
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: ProductUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update logo
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateLogo(rq: ProductUpdateLogoRQ, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/UpdateLogo`, rq, payload);
  }

  /**
   * Get upload logo action data
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  uploadLogoAction(id: number, payload?: IApiPayload<AppActionData>) {
    return this.api.get(
      `${this.flag}/UploadLogoAction/${id}`,
      undefined,
      payload
    );
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<ProductUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }

  /**
   * Update price
   * @param id Product id
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updatePrice(id: number, rq: ProductPriceItem, payload?: IdResultPayload) {
    return this.api.put(`${this.flag}/UpdatePrice/${id}`, rq, payload);
  }

  /**
   * Update product unit
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  updateUnit(rq: ProductUnitUpdateRQ, payload?: IApiPayload<number>) {
    return this.api.put(`${this.flag}/UpdateUnit`, rq, payload);
  }
}
