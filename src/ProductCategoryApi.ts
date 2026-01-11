import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload,
  MergeRQ
} from "@etsoo/appscript";
import { ProductCategoryCreateRQ } from "./rq/productCategory/ProductCategoryCreateRQ";
import { ProductCategoryListRQ } from "./rq/productCategory/ProductCategoryListRQ";
import { ProductCategoryListData } from "./dto/productCategory/ProductCategoryListData";
import { ProductCategoryQueryRQ } from "./rq/productCategory/ProductCategoryQueryRQ";
import { ProductCategoryQueryData } from "./dto/productCategory/ProductCategoryQueryData";
import { ProductCategoryUpdateRQ } from "./rq/productCategory/ProductCategoryUpdateRQ";
import { ProductCategoryUpdateReadData } from "./dto/productCategory/ProductCategoryUpdateReadData";
import { ProductCategoryDuplicateTestRQ } from "./rq/productCategory/ProductCategoryDuplicateTestRQ";
import { ProductCategoryDuplicateTestData } from "./dto/productCategory/ProductCategoryDuplicateTestData";

/**
 * Product category API
 */
export class ProductCategoryApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("ProductCategory", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: ProductCategoryCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * Duplicate test
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  duplicateTest(
    rq: ProductCategoryDuplicateTestRQ,
    payload?: IApiPayload<ProductCategoryDuplicateTestData[]>
  ) {
    return this.api.post(`${this.flag}/DuplicateTest`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(
    rq: ProductCategoryListRQ,
    payload?: IApiPayload<ProductCategoryListData[]>
  ) {
    return this.listBase(rq, payload);
  }

  /**
   * Merge
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  merge(rq: MergeRQ, payload?: IdResultPayload) {
    return this.mergeBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(
    rq: ProductCategoryQueryRQ,
    payload?: IApiPayload<ProductCategoryQueryData[]>
  ) {
    return this.queryBase(rq, payload);
  }

  /**
   * Sort
   * @param items Items
   * @param payload Payload
   * @returns Result
   */
  sort(items: ProductCategoryListData[], payload?: IApiPayload<number>) {
    return this.sortBase(items, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: ProductCategoryUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<ProductCategoryUpdateReadData>) {
    return this.updateReadBase(id, payload);
  }
}
