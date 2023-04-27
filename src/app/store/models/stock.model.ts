import {Product} from "./product.model";

export interface Stock {
  products: Product[],
  status: number
}
