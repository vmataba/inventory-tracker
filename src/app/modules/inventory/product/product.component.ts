import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {Product} from "../../../store/models/product.model";
import {remove} from "../../../store/actions/product.action";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product?: Product

  constructor(private store: Store) {
  }

  remove(id: any) {
    this.store.dispatch(remove({id}))
  }
}
