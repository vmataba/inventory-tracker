import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {add} from "../../../store/actions/product.action";

@Component({
  selector: 'app-product-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  get name() {
    return this.form?.get('name')
  }

  save() {
    this.store.dispatch(add({
      item: {
        ...this.form.value,
        id: Math.random()
      }
    }))
    this.form.reset()
  }
}
