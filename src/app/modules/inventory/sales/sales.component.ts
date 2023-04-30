import { Component } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  showEntryForm: boolean;
  totalSales$: Observable<number>;
  sales$: Observable<any[]>
  constructor() {
    this.showEntryForm = false;
    this.totalSales$ = of(0)
    this.sales$ = of([])
  }

  toggleEntryForm() {
    this.showEntryForm = !this.showEntryForm;
  }
}
