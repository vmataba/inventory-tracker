import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {add} from "../../../store/actions/product.action";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      inStock: ['', Validators.required],
      category: ['', Validators.required],
      icon: ['']
    })
  }

  ngOnInit() {

  }

  get name() {
    return this.form?.get('name')
  }

  get price() {
    return this.form?.get('price')
  }

  get quantity() {
    return this.form?.get('quantity')
  }

  get inStock() {
    return this.form?.get('inStock')
  }

  get category() {
    return this.form?.get('category')
  }

  get icon() {
    return this.form?.get('icon')
  }

  save() {
    this.store.dispatch(add({
      product: {
        ...this.form.value,
        id: Math.floor(Math.random() * 100)
      }
    }))
    this.form.reset()
  }

  loadCategories() {
    return [
      'Electronics',
      'Home Accessories',
      'Furniture',
      'Motor Spare Parts'
    ];
  }
}
