import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  
  remove = output<number>();

  like() {
    this.product().likes++;
  }

  delete() {
    this.remove.emit(this.product().id);
  }

  shareWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent('Посмотри, что я нашел: ' + link)}`, '_blank');
  }

  shareTelegram(link: string, name: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`, '_blank');
  }
}