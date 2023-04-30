import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Product} from "../../../store/models/product.model";
import {getProducts, getProductsCount} from "../../../store/selectors/product.selector";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  products$: Observable<Product[]>

  totalProducts: Observable<number>

  showEntryForm: boolean

  constructor(private store: Store) {
    this.showEntryForm = false
    this.products$ = store.select(getProducts)
    this.totalProducts = store.select(getProductsCount)
  }

  toggleEntryForm() {
    this.showEntryForm = !this.showEntryForm
  }
}
