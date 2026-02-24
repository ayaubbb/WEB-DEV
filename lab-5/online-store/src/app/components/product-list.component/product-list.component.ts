import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item.component/product-item.component';
import { input } from '@angular/core';
import { output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductList {

  products = input<Product[]>([]);
  removeProduct = output<number>();
  
  onRemove(id: number) {
    this.removeProduct.emit(id); 
  }
  shareOnWhatsApp(link: string) {
  const url = `https://wa.me/?text=${encodeURIComponent('Посмотри, что я нашла: ' + link)}`;
  window.open(url, '_blank');
  }
  
  shareOnTelegram(link: string, name: string) {
  const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
  window.open(url, '_blank');
  }
}