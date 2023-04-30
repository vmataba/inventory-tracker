import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Sale} from "../../../store/models/sale.model";
import {Store} from "@ngrx/store";
import {getSales, getSalesCount} from "../../../store/selectors/sale.selector";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  showEntryForm: boolean;
  totalSales$: Observable<number>;
  sales$: Observable<Sale[]>
  constructor(private store: Store) {
    this.showEntryForm = false;
    this.totalSales$ = of(0)
    this.sales$ = store.select(getSales)
    this.totalSales$ = store.select(getSalesCount)
  }

  toggleEntryForm() {
    this.showEntryForm = !this.showEntryForm;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
