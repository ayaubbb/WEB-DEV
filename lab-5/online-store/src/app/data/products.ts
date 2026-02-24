import { Category, Product } from "../models/product.model";

export const CATEGORIES: Category[] = [
    {id: 1, name: 'Smartphones'},
    {id: 2, name: 'Laptops'},
    {id: 3, name: 'Household appliances'},
    {id: 4, name: 'Smartwatch'},
];

export const PRODUCTS: Product[] = [
    {
      id: 1,
      category_id: 1,
      name: 'iPhone 17 Pro Max',
      description: 'Новейший смартфон с титановым корпусом и улучшенной системой камер. Максимальная производительность и автономность.',
      price: 950000,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-2tb-dual-esim-oranzhevyi-148426912/'
    },
    {
      id: 2,
      category_id: 1,
      name: 'Apple iPhone 15',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
      price: 408718,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 3,
      category_id: 1,
      name: 'Apple iPhone 13',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии выглядят поразительно четко.',
      price: 350390,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 4,
      category_id: 1,
      name: 'Apple iPhone 16',
      description: 'iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, выводя модель на другой уровень: лучше.',
      price: 587499,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h45/he1/87295472828446.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h80/hcb/87295472861214.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/hb6/87295472893982.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-chernyi-123728177/?c=750000000'
    },
    {
      id: 5,
      category_id: 1,
      name: 'Samsung Galaxy S25 Ultra 5G',
      description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн.',
      price: 561672,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p27/20120111.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000'
    },
    {
    id: 6,
    category_id: 2,
    name: 'Apple MacBook Air 16 2025',
    description: 'Ультратонкий ноутбук на базе Apple Silicon. Мощность и тишина в стильном голубом корпусе.',
    price: 654449,
    likes: 0,
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
        id: 7,
        category_id: 2,
        name: 'Apple MacBook Pro 16 2021',
        description: 'Представляем Apple MacBook Pro 16 2021 — мощный ноутбук, созданный для профессионалов и творческих людей.',
        price: 699990,
        likes: 0,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pdd/p7c/36863342.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/pf9/p7c/36863343.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p31/p7d/36863345.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000'
    },
    {
        id: 8,
        category_id: 2,
        name: 'ThundeRobot Zero Ultra XT R15',
        description: 'Представляем игровой ноутбук ThundeRobot Zero Ultra XT R15 с мощным процессором Intel Core i9.',
        price: 957990,
        likes: 0,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h62/85527684087838.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hd4/h62/85527684087838.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/h04/h71/85527684153374.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/he9/hb5/85527684218910.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/thunderobot-zero-ultra-xt-r15-15-6-32-gb-ssd-1000-gb-win-11-pro--117753657/?c=750000000'
    },
    {
        id: 9,
        category_id: 2,
        name: ' GIGABYTE GAMING A16 CTHI3KZ893SD',
        description: 'Ноутбук Gigabyte Gaming A16 CTHI3KZ893SD / i7 - 13620H / 16 ГБ / SSD 512 ГБ / RTX 5050 / DOS (9RGA6I75THFHIK0KZ000) Новый уровень мобильного гейминга.',
        price: 659990,
        likes: 0,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p15/p15/57459849.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p38/p12/57459854.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p3f/p0f/57459860.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p7a/p0e/57459867.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/gigabyte-gaming-a16-cthi3kz893sd-16-16-gb-m-2-512-gb-bez-os-9rga6i75thfhik0kz000-143766048/?c=750000000'
    },
    {
        id: 10,
        category_id: 2,
        name: 'Huawei MateBook 14',
        description: 'Тип жесткого диска SSD.Процессор Intel Core Ultra 5 125H',
        price: 519990,
        likes: 0,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p66/pe8/97753319.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pd2/pea/97753320.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/pef/pea/97753321.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p0b/peb/97753322.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/huawei-matebook-14-14-16-gb-ssd-1000-gb-dos-flemingh-w5611t-dos-155157465/?c=750000000'
    },
    {
        id: 11,
        category_id: 3,
        name: 'LG WashTower W4W8LVPK2HM',
        description: 'Единый комплекс из стирки и сушки. Умное управление и стильный зеленый дизайн.',
        price: 1086387,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p3f/p5a/109065596.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hd5/ha0/87354063618078.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/hba/hbf/87354063552542.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/h03/h2e/87354063683614.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/lg-washtower-w4w8lvpk2hm-zelenyi-bezhevyi-sushka-124522298/'
    },
    {
        id: 12,
        category_id: 3,
        name: 'Холодильник Bosch KFI96APEA',
        description: 'Вместительный холодильник Side-by-Side в цвете "сталь". Свежесть продуктов надолго.',
        price: 1339990,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p97/p72/43109549.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p03/p75/43109550.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p1f/p75/43109551.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p57/p75/43109553.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/bosch-kfi96apea-stal-noi-138887130/'
    },
    {
        id: 13,
        category_id: 3,
        name: 'Samsung DW60A6092BB',
        description: 'Встраиваемая посудомоечная машина. Идеальная чистота посуды с минимальным шумом.',
        price: 335000,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h23/85593323044894.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h55/h23/85593323044894.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/h0d/hb5/85593323175966.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/hdf/h28/85593323241502.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/samsung-dw60a6092bb-wt-belyi-117946746/'
    },
    {
        id: 14,
        category_id: 3,
        name: 'Пылесос Dyson V15s Detect Submarine',
        description: 'Dyson V15 Submarine — это инновационная версия пылесоса Dyson V15, которая включает в себя функцию влажной уборки.',
        price: 367035,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h62/86157341360158.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h9d/h05/86157341392926.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/h3b/hef/86157341425694.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/h97/h1b/86157341458462.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/dyson-v15s-detect-submarine-serebristyi-114424216/?c=750000000'
    },
    {
        id: 15,
        category_id: 3,
        name: 'Кухонный комбайн KENWOOD Cooking Chef KCL96.004DG',
        description: 'Новое поколение кухонных машин Kenwood. Оснащена индукционным нагревом от 20 °С до 200° С. Имеет 60 встроенных пошаговых рецептов и 31 программ для выпечки и готовки.',
        price: 949990,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/pe2/64508137.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pf8/pe2/64508138.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p81/pe5/64508140.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p9d/pe5/64508141.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/kenwood-cooking-chef-kcl96-004dg-temno-seryi-145566948/?c=750000000'
    },
    {
        id: 16,
        category_id: 4,
        name: 'Apple Watch Ultra 3 2025',
        description: 'Самые прочные и функциональные часы Apple. Титановый корпус и новый золотистый ремешок.',
        price: 684187,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p85/65587897.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pc4/p85/65587897.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p7d/p37/65587915.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p94/p2d/65587942.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/apple-watch-ultra-3-2025-gps-cellular-m-49-mm-zolotistyi-145887534/'
    },
    {
        id: 17,
        category_id: 4,
        name: 'Apple Watch SE GPS Gen.2 2024',
        description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности.',
        price: 139898,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },
    {
        id: 18,
        category_id: 4,
        name: 'Huawei WATCH GT 6',
        description: 'Изящные смарт-часы с автономностью до 14 дней и ярким AMOLED-экраном 1,32. Поддерживают мониторинг сна, стресса, SpO₂ и женского цикла.',
        price: 99521,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p87/pfe/73833197.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p37/pb4/73833200.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p8e/pb3/73833206.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-41-mm-zolotistyi-zolotistyi-147986879/?c=750000000'
    },
    {
        id: 19,
        category_id: 4,
        name: 'YUNTEKO DMi50',
        description: 'Смарт часы YUNTEKO DMi50 — умнее других "умных" часов, крепче твоих нервов, и работает дольше, чем ты на работе!',
        price: 29888,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p48/p52/58332178.jpg?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/pd0/p54/58332180.jpg?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000'
    },
    {
        id: 20,
        category_id: 4,
        name: 'ARTEO AS10',
        description: 'Эти смарт-часы созданы для активных и современных людей, которые ценят удобство и высокие технологии.',
        price: 9990,
        rating: 5.0,
        likes: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/p4d/82291138.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p84/p4a/82291140.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p68/p4a/82291141.png?format=gallery-medium', 
            'https://resources.cdn-kaspi.kz/img/m/p/p13/p4a/82291144.png?format=gallery-medium'
            ],
        link: 'https://kaspi.kz/shop/p/arteo-as10-41-mm-rozovyi-129639580/?c=750000000'
    },
];