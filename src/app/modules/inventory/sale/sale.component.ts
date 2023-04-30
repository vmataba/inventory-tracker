import {Component, Input} from '@angular/core';
import {Sale} from "../../../store/models/sale.model";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

  @Input() sale: Sale | undefined

  constructor() {

  }
}
