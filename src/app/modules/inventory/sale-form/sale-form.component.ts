import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent {

  private form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({})
  }

}
