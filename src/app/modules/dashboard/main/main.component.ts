import { Component } from '@angular/core';
import {range} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  protected readonly range = range;
}
