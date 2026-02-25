import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from "./components/product-list.component/product-list.component";
import { CATEGORIES, PRODUCTS } from './data/products';
import { Category, Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  categories = CATEGORIES;
  selected_category_id: number | null = null;
  allProducts = [...PRODUCTS];
  selected_category(id: number) {
    this.selected_category_id = id;
  }
 
  handleDelete(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }

  get filtered_products(): Product[] {
    if (!this.selected_category_id) return [];
    return this.allProducts.filter(p => p.category_id === this.selected_category_id);
  }
}