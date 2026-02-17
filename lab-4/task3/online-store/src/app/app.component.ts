import { Component, signal } from '@angular/core';
import { ProductList } from "./components/product-list.component/product-list.component";

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('online-store');
}
