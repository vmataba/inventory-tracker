import {Product} from "./product.model";
import {Supplier} from "./supplier.model";

export interface Purchase {
  id?: number
  cost: number
  products: Product[],
  supplier: Supplier
}
