import {Product} from "./product.model";

export interface SaleItemItem {
  product: Product,
  count: number
}

export interface Sale {
  id?: number
  amount: number
  items: SaleItemItem
  customer?: any
}
