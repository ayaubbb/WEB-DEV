import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductList {
  products: Product[] = [
    { id: 1,
      name: 'Apple iPad Pro 12.9 (2022)',
      description: 'Флагманский планшет с дисплеем Liquid Retina XDR и мощным процессором M2. Идеален для профессиональной работы с графикой.',
      price: 650000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pa1/78319822.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/pa1/78319823.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-256-gb-seryi-107278893/'
    },
    {
      id: 2,
      name: 'iPhone 17 Pro Max',
      description: 'Новейший смартфон с титановым корпусом и улучшенной системой камер. Максимальная производительность и автономность.',
      price: 950000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-2tb-dual-esim-oranzhevyi-148426912/'
    },
    {
    id: 3,
    name: 'Dyson HS05 Airwrap Complete Long',
    description: 'Стайлер нового поколения для длинных волос. В комплекте насадки для завивки и выпрямления.',
    price: 699988,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hf9/84395425529886.jpg?format=gallery-medium',
    images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h31/hf9/84395425529886.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/hc9/h19/84395425595422.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/h58/h28/84395425792030.jpg?format=gallery-medium'
        ],
    link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-volumise-airstrait-ht01-stailer-sinii-mednyi-130989306/'
  },
  {
    id: 4,
    name: 'Canon PowerShot G7 X Mark III',
    description: 'Компактная камера, любимица влогеров. Стриминг в 4K и отличный автофокус.',
    price: 636550,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium', 
      'https://resources.cdn-kaspi.kz/img/m/p/h41/h62/63813277646878.jpg?format=gallery-medium', 
      'https://resources.cdn-kaspi.kz/img/m/p/h82/h27/63813280825374.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/'
  },
  {
    id: 5,
    name: 'Apple MacBook Air 16 2025',
    description: 'Ультратонкий ноутбук на базе Apple Silicon. Мощность и тишина в стильном голубом корпусе.',
    price: 654449,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/p94/37425233.png?format=gallery-medium',
    images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pa2/p94/37425233.png?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/pbe/p94/37425234.png?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/pf0/p97/37425242.png?format=gallery-medium'
        ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mc6u4-138225601/'
  },
  {
    id: 6,
    name: 'Sony PlayStation 5 Slim',
    description: 'Игровая консоль нового поколения в компактном корпусе. Погружение в мир 4K-гейминга.',
    price: 303661,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
        ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/'
  },
  {
    id: 7,
    name: 'LG WashTower W4W8LVPK2HM',
    description: 'Единый комплекс из стирки и сушки. Умное управление и стильный зеленый дизайн.',
    price: 1086387,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3f/p5a/109065596.jpg?format=gallery-medium',
    images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd5/ha0/87354063618078.png?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/hba/hbf/87354063552542.png?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h2e/87354063683614.png?format=gallery-medium'
        ],
    link: 'https://kaspi.kz/shop/p/lg-washtower-w4w8lvpk2hm-zelenyi-bezhevyi-sushka-124522298/'
  },
  {
    id: 8,
    name: 'Холодильник Bosch KFI96APEA',
    description: 'Вместительный холодильник Side-by-Side в цвете "сталь". Свежесть продуктов надолго.',
    price: 1339990,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p97/p72/43109549.jpg?format=gallery-medium',
    images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p03/p75/43109550.png?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/p1f/p75/43109551.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/p57/p75/43109553.jpg?format=gallery-medium'
        ],
    link: 'https://kaspi.kz/shop/p/bosch-kfi96apea-stal-noi-138887130/'
  },
  {
    id: 9,
    name: 'Samsung DW60A6092BB',
    description: 'Встраиваемая посудомоечная машина. Идеальная чистота посуды с минимальным шумом.',
    price: 335000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h23/85593323044894.jpg?format=gallery-medium',
    images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h55/h23/85593323044894.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/h0d/hb5/85593323175966.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/hdf/h28/85593323241502.jpg?format=gallery-medium'
        ],
    link: 'https://kaspi.kz/shop/p/samsung-dw60a6092bb-wt-belyi-117946746/'
  },
  {
    id: 10,
    name: 'Apple Watch Ultra 3 2025',
    description: 'Самые прочные и функциональные часы Apple. Титановый корпус и новый золотистый ремешок.',
    price: 684187,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p85/65587897.jpg?format=gallery-medium',
    images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pc4/p85/65587897.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/p7d/p37/65587915.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/p94/p2d/65587942.jpg?format=gallery-medium'
        ],
    link: 'https://kaspi.kz/shop/p/apple-watch-ultra-3-2025-gps-cellular-m-49-mm-zolotistyi-145887534/'
  }
  ];

  shareOnWhatsApp(link: string) {
  const url = `https://wa.me/?text=${encodeURIComponent('Посмотри, что я нашла: ' + link)}`;
  window.open(url, '_blank');
  }
  
  shareOnTelegram(link: string, name: string) {
  const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
  window.open(url, '_blank');
  }
}
