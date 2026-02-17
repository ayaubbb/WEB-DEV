import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` ...
<li>Currency with "currency" {{ cost | currency }}</li>
`,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class App {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}