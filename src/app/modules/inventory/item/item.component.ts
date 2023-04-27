import {Component, Input} from '@angular/core';
import {Item} from "../../../store/models/item.model";
import {Store} from "@ngrx/store";
import {remove} from "../../../store/actions/item.action";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  constructor(private store: Store) {
  }

  @Input() item: Item = {name: ''}

  remove(id:any){
    this.store.dispatch(remove({id}))
  }
}
