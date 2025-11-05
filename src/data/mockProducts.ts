import { Product } from '../types';

export const products: Product[] = [
  // Smartphones
  {
    id: 1,
    name: {
      en: 'iPhone 15 Pro Max',
      ru: 'iPhone 15 Pro Max'
    },
    price: 1299,
    description: {
      en: 'The latest flagship from Apple with A17 Pro chip, titanium body, and 48MP camera. Perfect choice for professionals.',
      ru: 'Новейший флагман от Apple с чипом A17 Pro, титановым корпусом и 48-мегапиксельной камерой. Идеальный выбор для профессионалов.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1706989239873-ec28064b952e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTUlMjBwcm8lMjBtYXh8ZW58MHx8fHwxNzYyMDIzODg2fDA&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: {
      en: 'Smartphones',
      ru: 'Смартфоны'
    },
    specs: {
      en: [
        'Processor: A17 Pro chip',
        'Display: 6.7-inch Super Retina XDR',
        'Camera: 48MP main + 12MP ultra-wide',
        'Battery: Up to 29 hours video playback'
      ],
      ru: [
        'Процессор: чип A17 Pro',
        'Дисплей: 6.7-дюймовый Super Retina XDR',
        'Камера: 48 МП основная + 12 МП сверхширокоугольная',
        'Батарея: До 29 часов воспроизведения видео'
      ]
    },
    specifications: {
      en: [
        { label: 'CPU', value: 'A17 Pro Bionic' },
        { label: 'Display', value: '6.7" Super Retina XDR OLED' },
        { label: 'Resolution', value: '2796 x 1290 pixels' },
        { label: 'RAM', value: '8 GB' },
        { label: 'Storage', value: '256 GB / 512 GB / 1 TB' },
        { label: 'Main Camera', value: '48 MP (f/1.78)' },
        { label: 'Front Camera', value: '12 MP (f/1.9)' },
        { label: 'Battery', value: '4422 mAh' },
        { label: 'OS', value: 'iOS 17' },
        { label: 'Material', value: 'Titanium Frame' }
      ],
      ru: [
        { label: 'Процессор', value: 'A17 Pro Bionic' },
        { label: 'Дисплей', value: '6.7" Super Retina XDR OLED' },
        { label: 'Разрешение', value: '2796 x 1290 пикселей' },
        { label: 'ОЗУ', value: '8 ГБ' },
        { label: 'Память', value: '256 ГБ / 512 ГБ / 1 ТБ' },
        { label: 'Основная камера', value: '48 МП (f/1.78)' },
        { label: 'Фронтальная камера', value: '12 МП (f/1.9)' },
        { label: 'Батарея', value: '4422 мАч' },
        { label: 'ОС', value: 'iOS 17' },
        { label: 'Материал', value: 'Титановый корпус' }
      ]
    }
  },
  {
    id: 2,
    name: {
      en: 'Samsung Galaxy S24 Ultra',
      ru: 'Samsung Galaxy S24 Ultra'
    },
    price: 1199,
    description: {
      en: 'Flagship Android smartphone with S Pen, 200MP camera, and Dynamic AMOLED 2X display.',
      ru: 'Флагманский Android-смартфон с S Pen, 200-мегапиксельной камерой и дисплеем Dynamic AMOLED 2X.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1706989239873-ec28064b952e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: {
      en: 'Smartphones',
      ru: 'Смартфоны'
    },
    specs: {
      en: [
        'Processor: Snapdragon 8 Gen 3',
        'Display: 6.8-inch Dynamic AMOLED 2X',
        'Camera: 200MP main with AI zoom',
        'RAM: 12GB with 256GB storage'
      ],
      ru: [
        'Процессор: Snapdragon 8 Gen 3',
        'Дисплей: 6.8-дюймовый Dynamic AMOLED 2X',
        'Камера: 200 МП основная с AI-зумом',
        'ОЗУ: 12 ГБ с 256 ГБ памяти'
      ]
    }
  },
  {
    id: 3,
    name: {
      en: 'Google Pixel 8 Pro',
      ru: 'Google Pixel 8 Pro'
    },
    price: 999,
    description: {
      en: 'Google\'s AI-powered flagship with advanced computational photography and pure Android experience.',
      ru: 'Флагман Google с искусственным интеллектом, продвинутой вычислительной фотографией и чистым Android.'
    },
    imageUrl: 'https://unsplash.com/photos/7fN8gbiCGcA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cGl4ZWwlMjA4fGVufDB8fHx8MTc2MjA4NDA0NXww&force=true&w=800&q=75&auto=format',
    category: {
      en: 'Smartphones',
      ru: 'Смартфоны'
    },
    specs: {
      en: [
        'Processor: Google Tensor G3',
        'Display: 6.7-inch LTPO OLED 120Hz',
        'Camera: 50MP with Magic Eraser',
        'Battery: 5050mAh with fast charging'
      ],
      ru: [
        'Процессор: Google Tensor G3',
        'Дисплей: 6.7-дюймовый LTPO OLED 120 Гц',
        'Камера: 50 МП с Magic Eraser',
        'Батарея: 5050 мАч с быстрой зарядкой'
      ]
    }
  },
  {
    id: 4,
    name: {
      en: 'OnePlus 12',
      ru: 'OnePlus 12'
    },
    price: 799,
    description: {
      en: 'Powerful flagship killer with Hasselblad camera system and ultra-fast 100W charging.',
      ru: 'Мощный флагман с камерой Hasselblad и сверхбыстрой зарядкой 100 Вт.'
    },
imageUrl: 'https://unsplash.com/photos/CjUlnvc33YM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8b25lcGx1c3xlbnwwfHx8fDE3NjIwODQwNDZ8MA&force=true&w=800&q=75&auto=format',
    category: {
      en: 'Smartphones',
      ru: 'Смартфоны'
    },
    specs: {
      en: [
        'Processor: Snapdragon 8 Gen 3',
        'Display: 6.82-inch AMOLED 120Hz',
        'Camera: 50MP Hasselblad triple camera',
        'Charging: 100W SuperVOOC fast charging'
      ],
      ru: [
        'Процессор: Snapdragon 8 Gen 3',
        'Дисплей: 6.82-дюймовый AMOLED 120 Гц',
        'Камера: 50 МП тройная камера Hasselblad',
        'Зарядка: 100 Вт SuperVOOC быстрая зарядка'
      ]
    }
  },
  { 
    id: 22, 
    name: { en: 'Xiaomi 14 Ultra', ru: 'Xiaomi 14 Ultra' }, 
    price: 1199, 
    description: { en: 'Flagship with Leica quad camera, Snapdragon 8 Gen 3, and 120W HyperCharge.', ru: 'Флагман с четверной камерой Leica, Snapdragon 8 Gen 3 и зарядкой 120 Вт.' }, 
imageUrl: 'https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 3', '6.73" AMOLED 120Hz', '50MP Leica quad', '120W charging'], ru: ['Snapdragon 8 Gen 3', '6.73" AMOLED 120 Гц', '50 МП Leica четверная', '120 Вт зарядка'] } 
  },
  { 
    id: 23, 
    name: { en: 'Oppo Find X7 Pro', ru: 'Oppo Find X7 Pro' }, 
    price: 999, 
    description: { en: 'Premium flagship with Hasselblad camera, periscope telephoto.', ru: 'Премиальный флагман с камерой Hasselblad, перископным телеобъективом.' }, 
imageUrl: 'https://unsplash.com/photos/r5TvhO_C4ls/download?force=true&w=800&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 3', '6.82" AMOLED QHD+', 'Hasselblad triple 50MP'], ru: ['Snapdragon 8 Gen 3', '6.82" AMOLED QHD+', 'Hasselblad тройная 50 МП'] } 
  },
  { 
    id: 24, 
    name: { en: 'Vivo X100 Pro', ru: 'Vivo X100 Pro' }, 
    price: 899, 
    description: { en: 'Photography flagship with Zeiss optics, MediaTek Dimensity 9300.', ru: 'Фотографический флагман с оптикой Zeiss, чипом MediaTek Dimensity 9300.' }, 
imageUrl: 'https://unsplash.com/photos/0umK97_bFts/download?force=true&w=800&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['MediaTek Dimensity 9300', '6.78" AMOLED', '50MP Zeiss triple'], ru: ['MediaTek Dimensity 9300', '6.78" AMOLED', '50 МП Zeiss тройная'] } 
  },
  { 
    id: 25, 
    name: { en: 'Asus ROG Phone 8 Pro', ru: 'Asus ROG Phone 8 Pro' }, 
    price: 1299, 
    description: { en: 'Ultimate gaming phone with AeroActive cooling, 165Hz display.', ru: 'Максимальный игровой телефон с охлаждением AeroActive, дисплеем 165 Гц.' }, 
imageUrl: 'https://images.unsplash.com/photo-1705585174953-9b2aa8afc174?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 3', '6.78" AMOLED 165Hz', '6000mAh battery'], ru: ['Snapdragon 8 Gen 3', '6.78" AMOLED 165 Гц', 'Батарея 6000 мАч'] } 
  },
  { 
    id: 26, 
    name: { en: 'Nothing Phone (2a)', ru: 'Nothing Phone (2a)' }, 
    price: 399, 
    description: { en: 'Mid-range phone with unique Glyph interface and clean Android.', ru: 'Средний сегмент с уникальным интерфейсом Glyph, чистым Android.' }, 
imageUrl: 'https://images.unsplash.com/photo-1705585175110-d25f92c183aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Dimensity 7200 Pro', '6.7" AMOLED 120Hz', 'Glyph Interface'], ru: ['Dimensity 7200 Pro', '6.7" AMOLED 120 Гц', 'Glyph интерфейс'] } 
  },
  { 
    id: 27, 
    name: { en: 'Motorola Edge 50 Pro', ru: 'Motorola Edge 50 Pro' }, 
    price: 599, 
    description: { en: 'Stylish curved display phone with 50MP triple camera.', ru: 'Стильный телефон с изогнутым дисплеем, тройной камерой 50 МП.' }, 
imageUrl: 'https://images.unsplash.com/photo-1706989239865-25552e6f2c9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 7 Gen 3', '6.7" pOLED curved', '125W TurboPower'], ru: ['Snapdragon 7 Gen 3', '6.7" pOLED изогнутый', '125 Вт TurboPower'] } 
  },
  { 
    id: 28, 
    name: { en: 'Sony Xperia 1 VI', ru: 'Sony Xperia 1 VI' }, 
    price: 1399, 
    description: { en: 'Professional camera phone with 4K 120Hz display, Zeiss optics.', ru: 'Профессиональный камерофон с дисплеем 4K 120 Гц, оптикой Zeiss.' }, 
imageUrl: 'https://unsplash.com/photos/a-white-sony-xperia-phone-sits-on-yellow-_RCFiAH6OWE/download?force=true&w=800&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 3', '6.5" 4K HDR OLED 120Hz', 'Zeiss 48MP triple'], ru: ['Snapdragon 8 Gen 3', '6.5" 4K HDR OLED 120 Гц', 'Zeiss 48 МП тройная'] } 
  },
  { 
    id: 29, 
    name: { en: 'Honor Magic 6 Pro', ru: 'Honor Magic 6 Pro' }, 
    price: 1099, 
    description: { en: 'AI-powered flagship with Magic Eye camera system.', ru: 'Флагман с ИИ, камерой Magic Eye.' }, 
imageUrl: 'https://images.unsplash.com/photo-1583418855719-a559fc714089?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbXN1bmclMjBnYWxheHklMjBzMjQlMjB1bHRyYXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 3', '6.8" LTPO OLED', '5600mAh battery'], ru: ['Snapdragon 8 Gen 3', '6.8" LTPO OLED', 'Батарея 5600 мАч'] } 
  },
  { 
    id: 30, 
    name: { en: 'Realme GT 6', ru: 'Realme GT 6' }, 
    price: 549, 
    description: { en: 'Performance flagship killer with Snapdragon 8s Gen 3.', ru: 'Производительный убийца флагманов со Snapdragon 8s Gen 3.' }, 
imageUrl: 'https://images.unsplash.com/photo-1705585174987-a9a033edbbb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8s Gen 3', '6.7" AMOLED 120Hz', '120W SuperDart'], ru: ['Snapdragon 8s Gen 3', '6.7" AMOLED 120 Гц', '120 Вт SuperDart'] } 
  },
  { 
    id: 31, 
    name: { en: 'ZTE Axon 60 Ultra', ru: 'ZTE Axon 60 Ultra' }, 
    price: 799, 
    description: { en: 'Innovative phone with under-display camera, 200MP sensor.', ru: 'Инновационный телефон с камерой под дисплеем, сенсор 200 МП.' }, 
    imageUrl: 'https://m-cdn.phonearena.com/images/articles/413235-image/ZTE-Axon-60-Ultra.jpg', 
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 2', '6.78" AMOLED UDC', '200MP main camera'], ru: ['Snapdragon 8 Gen 2', '6.78" AMOLED UDC', '200 МП основная'] } 
  },
  { 
    id: 32, 
    name: { en: 'Nubia Red Magic 9 Pro', ru: 'Nubia Red Magic 9 Pro' }, 
    price: 749, 
    description: { en: 'Gaming beast with built-in cooling fan, 165Hz display.', ru: 'Игровой зверь со встроенным вентилятором, дисплеем 165 Гц.' }, 
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.LMGhVnkxmeGHGHZ5tPHQTQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', 
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 3', '6.8" AMOLED 165Hz', '6500mAh battery'], ru: ['Snapdragon 8 Gen 3', '6.8" AMOLED 165 Гц', 'Батарея 6500 мАч'] } 
  },
  { 
    id: 33, 
    name: { en: 'Google Pixel 9 Pro', ru: 'Google Pixel 9 Pro' }, 
    price: 1099, 
    description: { en: 'Next-gen Pixel with Tensor G4, AI photo editing, pure Android.', ru: 'Pixel нового поколения с Tensor G4, AI-редактированием фото.' }, 
imageUrl: 'https://unsplash.com/photos/gomZx1NFO98/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHBpeGVsJTIwOHxlbnwwfHx8fDE3NjIwODQwNDV8MA&force=true&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Google Tensor G4', '6.7" LTPO OLED 120Hz', '7 years updates'], ru: ['Google Tensor G4', '6.7" LTPO OLED 120 Гц', '7 лет обновлений'] } 
  },
  { 
    id: 34, 
    name: { en: 'Huawei Pura 70 Ultra', ru: 'Huawei Pura 70 Ultra' }, 
    price: 1249, 
    description: { en: 'Premium camera phone with variable aperture, Kirin 9010.', ru: 'Премиальный камерофон с изменяемой апертурой, чипом Kirin 9010.' }, 
imageUrl: 'https://unsplash.com/photos/t7h1cUX7xyI/download?force=true&w=800&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Kirin 9010 5G', '6.8" LTPO OLED', 'Variable aperture'], ru: ['Kirin 9010 5G', '6.8" LTPO OLED', 'Изменяемая апертура'] } 
  },
  { 
    id: 35, 
    name: { en: 'OnePlus 12R', ru: 'OnePlus 12R' }, 
    price: 599, 
    description: { en: 'Value flagship with Snapdragon 8 Gen 2, 100W charging.', ru: 'Доступный флагман со Snapdragon 8 Gen 2, зарядкой 100 Вт.' }, 
imageUrl: 'https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyNCUyMHVsdHJhfGVufDB8fHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 2', '6.78" AMOLED 120Hz', '5500mAh + 100W'], ru: ['Snapdragon 8 Gen 2', '6.78" AMOLED 120 Гц', '5500 мАч + 100 Вт'] } 
  },
  { 
    id: 36, 
    name: { en: 'Poco F6 Pro', ru: 'Poco F6 Pro' }, 
    price: 449, 
    originalPrice: 499, 
    description: { en: 'Budget flagship with Snapdragon 8 Gen 2, great value.', ru: 'Бюджетный флагман со Snapdragon 8 Gen 2, отличная цена.' }, 
imageUrl: 'https://images.unsplash.com/photo-1706989239873-ec28064b952e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl4ZWwlMjA4fGVufDB8fHx8MTc2MjA4NDA0NXww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Smartphones', ru: 'Смартфоны' }, 
    specs: { en: ['Snapdragon 8 Gen 2', '6.67" AMOLED 120Hz', '120W HyperCharge'], ru: ['Snapdragon 8 Gen 2', '6.67" AMOLED 120 Гц', '120 Вт HyperCharge'] } 
  },
  // Laptops
  {
    id: 5,
    name: {
      en: 'MacBook Pro 14-inch - M3 Pro',
      ru: 'MacBook Pro 14 дюймов - M3 Pro'
    },
    price: 1899,
    originalPrice: 1999,
    description: {
      en: 'The new benchmark for pro laptops, now with the powerful M3 Pro chip for extreme performance and battery life.',
      ru: 'Новый эталон профессиональных ноутбуков с мощным чипом M3 Pro для экстремальной производительности и времени работы.'
    },
imageUrl: 'https://images.unsplash.com/photo-1646927320535-37030675d1b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMHBybyUyMDE0fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: {
      en: 'Laptops',
      ru: 'Ноутбуки'
    },
    specs: {
      en: [
        'Chip: Apple M3 Pro',
        'Display: 14.2-inch Liquid Retina XDR',
        'RAM: 18GB unified memory',
        'Storage: 512GB SSD'
      ],
      ru: [
        'Чип: Apple M3 Pro',
        'Дисплей: 14.2-дюймовый Liquid Retina XDR',
        'ОЗУ: 18 ГБ унифицированной памяти',
        'Накопитель: 512 ГБ SSD'
      ]
    }
  },
  {
    id: 6,
    name: {
      en: 'Dell XPS 15',
      ru: 'Dell XPS 15'
    },
    price: 1899,
    description: {
      en: 'Premium laptop with Intel i9 processor, NVIDIA RTX 4060, and stunning 4K OLED display for creative work.',
      ru: 'Премиальный ноутбук с процессором Intel i9, NVIDIA RTX 4060 и потрясающим 4K OLED-дисплеем для творческой работы.'
    },
imageUrl: 'https://images.unsplash.com/photo-1550221927-f7e52256370b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbGwlMjB4cHMlMjAxNXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: {
      en: 'Laptops',
      ru: 'Ноутбуки'
    },
    specs: {
      en: [
        'Processor: Intel Core i9-13900H',
        'Graphics: NVIDIA RTX 4060 8GB',
        'Display: 15.6-inch 4K OLED touchscreen',
        'RAM: 32GB DDR5, Storage: 1TB SSD'
      ],
      ru: [
        'Процессор: Intel Core i9-13900H',
        'Графика: NVIDIA RTX 4060 8 ГБ',
        'Дисплей: 15.6-дюймовый 4K OLED сенсорный',
        'ОЗУ: 32 ГБ DDR5, Накопитель: 1 ТБ SSD'
      ]
    }
  },
  {
    id: 7,
    name: {
      en: 'ASUS ROG Zephyrus G14',
      ru: 'ASUS ROG Zephyrus G14'
    },
    price: 1599,
    description: {
      en: 'Compact gaming powerhouse with AMD Ryzen 9 and RTX 4070, perfect for gamers on the go.',
      ru: 'Компактный игровой монстр с AMD Ryzen 9 и RTX 4070, идеален для геймеров в дороге.'
    },
imageUrl: 'https://images.unsplash.com/photo-1595697373384-ce9a08ebe839?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9nJTIwemVwaHlydXMlMjBnMTR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: {
      en: 'Laptops',
      ru: 'Ноутбуки'
    },
    specs: {
      en: [
        'Processor: AMD Ryzen 9 7940HS',
        'Graphics: NVIDIA RTX 4070 8GB',
        'Display: 14-inch QHD+ 165Hz',
        'Weight: Only 1.65kg ultra-portable'
      ],
      ru: [
        'Процессор: AMD Ryzen 9 7940HS',
        'Графика: NVIDIA RTX 4070 8 ГБ',
        'Дисплей: 14-дюймовый QHD+ 165 Гц',
        'Вес: Всего 1.65 кг ультрапортативный'
      ]
    }
  },
  {
    id: 8,
    name: {
      en: 'Lenovo ThinkPad X1 Carbon Gen 11',
      ru: 'Lenovo ThinkPad X1 Carbon 11-го поколения'
    },
    price: 1399,
    description: {
      en: 'Business ultrabook with legendary ThinkPad keyboard, military-grade durability, and all-day battery.',
      ru: 'Бизнес-ультрабук с легендарной клавиатурой ThinkPad, военной прочностью и батареей на весь день.'
    },
imageUrl: 'https://images.unsplash.com/photo-1743456056142-1aaf69656dfa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhpbktwYWR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: {
      en: 'Laptops',
      ru: 'Ноутбуки'
    },
    specs: {
      en: [
        'Processor: Intel Core i7-1365U',
        'Display: 14-inch 2.8K OLED',
        'RAM: 16GB LPDDR5',
        'Security: Fingerprint + IR camera'
      ],
      ru: [
        'Процессор: Intel Core i7-1365U',
        'Дисплей: 14-дюймовый 2.8K OLED',
        'ОЗУ: 16 ГБ LPDDR5',
        'Безопасность: Сканер отпечатков + ИК-камера'
      ]
    }
  },
  // Drones
  {
    id: 9,
    name: {
      en: 'DJI Mavic 3 Pro',
      ru: 'DJI Mavic 3 Pro'
    },
    price: 2199,
    description: {
      en: 'Professional drone with triple-camera system featuring Hasselblad and dual telephoto lenses for cinematic shots.',
      ru: 'Профессиональный дрон с тройной камерой Hasselblad и двумя телеобъективами для кинематографических снимков.'
    },
imageUrl: 'https://plus.unsplash.com/premium_photo-1673970474453-7c49815647ee?w=800&q=75&auto=format',
    category: {
      en: 'Drones',
      ru: 'Дроны'
    },
    specs: {
      en: [
        'Camera: Hasselblad + dual telephoto',
        'Flight Time: Up to 43 minutes',
        'Range: 15km transmission distance',
        'Obstacle Detection: Omnidirectional sensors'
      ],
      ru: [
        'Камера: Hasselblad + двойной телеобъектив',
        'Время полета: До 43 минут',
        'Дальность: 15 км дальность передачи',
        'Обнаружение препятствий: Всенаправленные датчики'
      ]
    }
  },
  {
    id: 10,
    name: {
      en: 'DJI Mini 3 Pro',
      ru: 'DJI Mini 3 Pro'
    },
    price: 699,
    originalPrice: 759,
    description: {
      en: 'Ultra-compact drone under 249g with 4K HDR video and intelligent flight modes.',
      ru: 'Ультракомпактный дрон весом менее 249г с видео 4K HDR и интеллектуальными режимами полета.'
    },
imageUrl: 'https://plus.unsplash.com/premium_photo-1669075651203-2185918ae9c2?w=800&q=75&auto=format',
    category: {
      en: 'Drones',
      ru: 'Дроны'
    },
    specs: {
      en: [
        'Weight: Under 249g (no registration)',
        'Camera: 4K/60fps HDR video',
        'Flight Time: 34 minutes',
        'Features: True vertical shooting'
      ],
      ru: [
        'Вес: Менее 249г (без регистрации)',
        'Камера: Видео 4K/60fps HDR',
        'Время полета: 34 минуты',
        'Особенности: Настоящая вертикальная съемка'
      ]
    }
  },
  {
    id: 11,
    name: {
      en: 'Autel EVO Nano+',
      ru: 'Autel EVO Nano+'
    },
    price: 649,
    description: {
      en: 'Lightweight 4K drone with RYYB sensor for superior low-light performance and obstacle avoidance.',
      ru: 'Легкий дрон 4K с RYYB сенсором для превосходной съемки при слабом освещении и избеганием препятствий.'
    },
imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmVzfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: {
      en: 'Drones',
      ru: 'Дроны'
    },
    specs: {
      en: [
        'Camera: 50MP RYYB sensor',
        'Video: 4K/30fps HDR',
        'Flight Time: 28 minutes',
        'Obstacles: 3-way obstacle avoidance'
      ],
      ru: [
        'Камера: 50 МП RYYB сенсор',
        'Видео: 4K/30fps HDR',
        'Время полета: 28 минут',
        'Препятствия: 3-стороннее избегание препятствий'
      ]
    }
  },
  // Mobility
  {
    id: 12,
    name: {
      en: 'Segway Ninebot Max G30',
      ru: 'Segway Ninebot Max G30'
    },
    price: 899,
    originalPrice: 949,
    description: {
      en: 'Premium electric scooter with 40-mile range and powerful dual suspension system.',
      ru: 'Премиальный электросамокат с запасом хода 64 км и мощной двухамортизационной системой.'
    },
imageUrl: 'https://images.unsplash.com/photo-1555314138-ff08c382c920?w=800&q=75&auto=format',
    category: {
      en: 'Mobility',
      ru: 'Мобильность'
    },
    specs: {
      en: [
        'Range: Up to 40 miles (65km)',
        'Speed: 18.6 mph (30 km/h) max',
        'Battery: 551Wh with regenerative braking',
        'Tires: 10-inch pneumatic tubeless'
      ],
      ru: [
        'Дальность: До 64 км',
        'Скорость: Макс. 30 км/ч',
        'Батарея: 551 Втч с рекуперативным торможением',
        'Шины: 10-дюймовые пневматические бескамерные'
      ]
    }
  },
  {
    id: 13,
    name: {
      en: 'Xiaomi Electric Scooter 4 Pro',
      ru: 'Xiaomi Электросамокат 4 Pro'
    },
    price: 699,
    description: {
      en: 'Powerful scooter with 55km range, dual braking system, and integrated display for urban commuting.',
      ru: 'Мощный самокат с запасом хода 55 км, двойной тормозной системой и встроенным дисплеем для городских поездок.'
    },
imageUrl: 'https://images.unsplash.com/photo-1621503237436-5e1ec872ab03?w=800&q=75&auto=format',
    category: {
      en: 'Mobility',
      ru: 'Мобильность'
    },
    specs: {
      en: [
        'Motor: 700W peak power',
        'Range: 55km on single charge',
        'Display: Integrated LED dashboard',
        'Braking: E-ABS + disc brake'
      ],
      ru: [
        'Мотор: 700 Вт пиковая мощность',
        'Дальность: 55 км на одном заряде',
        'Дисплей: Встроенная LED-панель',
        'Торможение: E-ABS + дисковый тормоз'
      ]
    }
  },
  {
    id: 14,
    name: {
      en: 'Onewheel GT',
      ru: 'Onewheel GT'
    },
    price: 2199,
    description: {
      en: 'Revolutionary one-wheel electric board with 32-mile range and terrain-adaptive technology.',
      ru: 'Революционная одноколесная электрическая доска с запасом хода 51 км и технологией адаптации к местности.'
    },
imageUrl: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=800&q=75&auto=format',
    category: {
      en: 'Mobility',
      ru: 'Мобильность'
    },
    specs: {
      en: [
        'Range: 32 miles (51km)',
        'Top Speed: 20 mph (32 km/h)',
        'Battery: Hypercore technology',
        'Tire: Treaded for all-terrain'
      ],
      ru: [
        'Дальность: 51 км',
        'Макс. скорость: 32 км/ч',
        'Батарея: Технология Hypercore',
        'Шина: С протектором для любой местности'
      ]
    }
  },
  // Accessories
  {
    id: 15,
    name: {
      en: 'Wireless Earbuds - "Cyber Ninja" Edition',
      ru: 'Беспроводные наушники - Издание "Кибер Ниндзя"'
    },
    price: 89,
    description: {
      en: 'Premium TWS earbuds with active noise cancellation and anime-inspired sleek black design with neon accents.',
      ru: 'Премиальные TWS наушники с активным шумоподавлением и элегантным черным дизайном в стиле аниме с неоновыми акцентами.'
    },
imageUrl: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=800&q=75&auto=format',
    category: {
      en: 'Accessories',
      ru: 'Аксессуары'
    },
    specs: {
      en: [
        'ANC: Hybrid active noise cancellation',
        'Battery: 8h + 32h with case',
        'Codec: aptX HD support',
        'Design: Ninja-themed LED case'
      ],
      ru: [
        'ANC: Гибридное активное шумоподавление',
        'Батарея: 8ч + 32ч с кейсом',
        'Кодек: Поддержка aptX HD',
        'Дизайн: LED-кейс в стиле ниндзя'
      ]
    }
  },
  {
    id: 16,
    name: {
      en: 'Gaming Mouse - "Dragon Slayer"',
      ru: 'Игровая мышь - "Убийца Драконов"'
    },
    price: 69,
    description: {
      en: 'High-precision gaming mouse with dragon-scale RGB lighting, 20,000 DPI sensor, and customizable weights.',
      ru: 'Высокоточная игровая мышь с RGB-подсветкой драконьей чешуи, сенсором 20,000 DPI и настраиваемыми грузиками.'
    },
imageUrl: 'https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=800&q=75&auto=format',
    category: {
      en: 'Accessories',
      ru: 'Аксессуары'
    },
    specs: {
      en: [
        'Sensor: 20,000 DPI optical',
        'Polling Rate: 1000Hz',
        'RGB: Dragon-scale lighting effects',
        'Buttons: 8 programmable buttons'
      ],
      ru: [
        'Сенсор: 20,000 DPI оптический',
        'Частота опроса: 1000 Гц',
        'RGB: Эффекты драконьей чешуи',
        'Кнопки: 8 программируемых кнопок'
      ]
    }
  },
  {
    id: 17,
    name: {
      en: 'Tech Backpack - "Neon Tokyo" Limited Edition',
      ru: 'Технологичный рюкзак - Лимитированное издание "Неоновый Токио"'
    },
    price: 79,
    originalPrice: 99,
    description: {
      en: 'Futuristic anime-style backpack with neon Tokyo cityscape design. Features USB charging port, anti-theft zipper, and laptop compartment.',
      ru: 'Футуристический рюкзак в стиле аниме с дизайном неонового городского пейзажа Токио. USB-порт для зарядки, молния от кражи и отделение для ноутбука.'
    },
imageUrl: 'https://images.unsplash.com/photo-1602414975697-62e63811999a?w=800&q=75&auto=format',
    category: {
      en: 'Accessories',
      ru: 'Аксессуары'
    },
    specs: {
      en: [
        'Material: Water-resistant nylon',
        'Laptop: Fits up to 17-inch',
        'USB: Built-in charging port',
        'Design: Neon Tokyo night scene print'
      ],
      ru: [
        'Материал: Водостойкий нейлон',
        'Ноутбук: До 17 дюймов',
        'USB: Встроенный порт для зарядки',
        'Дизайн: Принт ночного неонового Токио'
      ]
    }
  },
  {
    id: 18,
    name: {
      en: 'Mechanical Keyboard - "Sakura Blossom"',
      ru: 'Механическая клавиатура - "Цветение Сакуры"'
    },
    price: 129,
    description: {
      en: 'Premium mechanical keyboard with cherry blossom keycaps, hot-swappable switches, and per-key RGB lighting.',
      ru: 'Премиальная механическая клавиатура с колпачками клавиш цветения сакуры, заменяемыми переключателями и RGB-подсветкой каждой клавиши.'
    },
imageUrl: 'https://images.unsplash.com/photo-1619683322755-4545503f1afa?w=800&q=75&auto=format',
    category: {
      en: 'Accessories',
      ru: 'Аксессуары'
    },
    specs: {
      en: [
        'Switches: Hot-swappable mechanical',
        'Layout: 75% compact with numpad',
        'Keycaps: PBT double-shot sakura theme',
        'RGB: Per-key addressable lighting'
      ],
      ru: [
        'Переключатели: Заменяемые механические',
        'Раскладка: 75% компактная с цифровым блоком',
        'Колпачки: PBT двойной выстрел тема сакуры',
        'RGB: Адресуемая подсветка каждой клавиши'
      ]
    }
  },
  {
    id: 19,
    name: {
      en: 'Smart Watch - "Mecha Warrior"',
      ru: 'Умные часы - "Меха Воин"'
    },
    price: 199,
    description: {
      en: 'Anime-inspired smartwatch with mecha design, AMOLED display, health tracking, and 7-day battery life.',
      ru: 'Умные часы в стиле аниме с дизайном меха, AMOLED-дисплеем, отслеживанием здоровья и 7-дневным временем работы.'
    },
imageUrl: 'https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=800&q=75&auto=format',
    category: {
      en: 'Accessories',
      ru: 'Аксессуары'
    },
    specs: {
      en: [
        'Display: 1.43-inch AMOLED',
        'Battery: 7 days typical use',
        'Health: Heart rate + SpO2 + sleep',
        'Design: Mecha-inspired watch faces'
      ],
      ru: [
        'Дисплей: 1.43-дюймовый AMOLED',
        'Батарея: 7 дней обычного использования',
        'Здоровье: ЧСС + SpO2 + сон',
        'Дизайн: Циферблаты в стиле меха'
      ]
    }
  },
  {
    id: 20,
    name: {
      en: 'Portable Charger - "Power Crystal"',
      ru: 'Портативное зарядное устройство - "Силовой Кристалл"'
    },
    price: 49,
    description: {
      en: 'Anime-styled 20,000mAh power bank with LED crystal design, 65W fast charging, and multiple device support.',
      ru: 'Внешний аккумулятор на 20,000 мАч в стиле аниме с LED-дизайном кристалла, быстрой зарядкой 65 Вт и поддержкой нескольких устройств.'
    },
imageUrl: 'https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?w=800&q=75&auto=format',
    category: {
      en: 'Accessories',
      ru: 'Аксессуары'
    },
    specs: {
      en: [
        'Capacity: 20,000mAh high-density',
        'Output: 65W PD fast charging',
        'Ports: USB-C + 2x USB-A',
        'LED: Crystal-style charge indicator'
      ],
      ru: [
        'Емкость: 20,000 мАч высокой плотности',
        'Выход: 65 Вт PD быстрая зарядка',
        'Порты: USB-C + 2x USB-A',
        'LED: Индикатор заряда в стиле кристалла'
      ]
    }
  },
  {
    id: 21,
    name: {
      en: 'Gaming Headset - "Shadow Phantom"',
      ru: 'Игровая гарнитура - "Теневой Фантом"'
    },
    price: 149,
    description: {
      en: 'Premium gaming headset with 7.1 surround sound, noise-canceling mic, and shadow-themed RGB lighting.',
      ru: 'Премиальная игровая гарнитура с объемным звуком 7.1, микрофоном с шумоподавлением и RGB-подсветкой в теме теней.'
    },
imageUrl: 'https://images.unsplash.com/photo-1677086813101-496781a0f327?w=800&q=75&auto=format',
    category: {
      en: 'Accessories',
      ru: 'Аксессуары'
    },
    specs: {
      en: [
        'Audio: Virtual 7.1 surround sound',
        'Mic: Detachable noise-canceling',
        'Comfort: Memory foam ear cushions',
        'RGB: Shadow-flow lighting effects'
      ],
      ru: [
        'Аудио: Виртуальный объемный звук 7.1',
        'Микрофон: Съемный с шумоподавлением',
        'Комфорт: Амбушюры из пены с памятью',
        'RGB: Эффекты теневого свечения'
      ]
    }
  },
  { 
    id: 37, 
    name: { en: 'HP Spectre x360 16', ru: 'HP Spectre x360 16' }, 
    price: 1799, 
    description: { en: 'Premium 2-in-1 convertible with Intel Core Ultra, OLED display.', ru: 'Премиальный трансформер с Intel Core Ultra, OLED дисплеем.' }, 
imageUrl: 'https://images.unsplash.com/photo-1658312227565-439994de5fe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHAlMjBzcGVjdHJlJTIweDM2MHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core Ultra 7 155H', '16" 3K+ OLED touch', '32GB RAM', '2TB SSD'], ru: ['Intel Core Ultra 7 155H', '16" 3K+ OLED сенсорный', '32 ГБ ОЗУ', '2 ТБ SSD'] } 
  },
  { 
    id: 38, 
    name: { en: 'Razer Blade 16', ru: 'Razer Blade 16' }, 
    price: 2999, 
    description: { en: 'Ultimate gaming laptop with RTX 4090, Mini-LED display.', ru: 'Максимальный игровой ноутбук с RTX 4090, Mini-LED дисплеем.' }, 
imageUrl: 'https://images.unsplash.com/photo-1554876306-5b1fa0c884e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmF6ZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core i9-14900HX', 'RTX 4090 16GB', '16" QHD+ 240Hz'], ru: ['Intel Core i9-14900HX', 'RTX 4090 16 ГБ', '16" QHD+ 240 Гц'] } 
  },
  { 
    id: 39, 
    name: { en: 'Microsoft Surface Laptop 6', ru: 'Microsoft Surface Laptop 6' }, 
    price: 1499, 
    description: { en: 'Elegant productivity laptop with Snapdragon X Elite, AI features.', ru: 'Элегантный ноутбук с Snapdragon X Elite, AI функциями.' }, 
imageUrl: 'https://images.unsplash.com/photo-1724960996748-6251f2ae3f5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cmZhY2UlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Snapdragon X Elite', '13.8" PixelSense', 'Up to 22h battery'], ru: ['Snapdragon X Elite', '13.8" PixelSense', 'До 22 ч батарея'] } 
  },
  { 
    id: 40, 
    name: { en: 'Acer Predator Helios 18', ru: 'Acer Predator Helios 18' }, 
    price: 2499, 
    description: { en: 'Large gaming powerhouse with 18" display, RTX 4080.', ru: 'Крупный игровой монстр с 18" дисплеем, RTX 4080.' }, 
imageUrl: 'https://images.unsplash.com/photo-1693206578601-21cdc341d2c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNlciUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core i9-14900HX', 'RTX 4080 12GB', '18" QHD+ 250Hz'], ru: ['Intel Core i9-14900HX', 'RTX 4080 12 ГБ', '18" QHD+ 250 Гц'] } 
  },
  { 
    id: 41, 
    name: { en: 'LG Gram 17 (2024)', ru: 'LG Gram 17 (2024)' }, 
    price: 1699, 
    description: { en: 'Ultra-lightweight 17" laptop at 1.35kg with Intel Core Ultra.', ru: 'Ультралегкий 17" ноутбук 1.35 кг с Intel Core Ultra.' }, 
imageUrl: 'https://images.unsplash.com/photo-1685969957889-33c32d97b6be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBncmFtfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core Ultra 7', '17" 2560x1600 IPS', 'Only 1.35kg'], ru: ['Intel Core Ultra 7', '17" 2560x1600 IPS', 'Всего 1.35 кг'] } 
  },
  { 
    id: 42, 
    name: { en: 'MSI Titan 18 HX', ru: 'MSI Titan 18 HX' }, 
    price: 4999, 
    originalPrice: 5499, 
    description: { en: 'Desktop replacement with RTX 4090, Cherry MX keyboard.', ru: 'Замена ПК с RTX 4090, клавиатурой Cherry MX.' }, 
imageUrl: 'https://images.unsplash.com/photo-1677917561151-0f7171fe4f01image?ixlib=rb-4.1.0&crop=faces&fit=crop&h=32&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core i9-14900HX', 'RTX 4090 16GB', '18" 4K 120Hz'], ru: ['Intel Core i9-14900HX', 'RTX 4090 16 ГБ', '18" 4K 120 Гц'] } 
  },
  { 
    id: 43, 
    name: { en: 'Framework Laptop 16', ru: 'Framework Laptop 16' }, 
    price: 1899, 
    description: { en: 'Modular upgradeable laptop with swappable GPU and components.', ru: 'Модульный обновляемый ноутбук с заменяемым GPU.' }, 
imageUrl: 'https://images.unsplash.com/photo-1522198798025-edbf00dabd6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['AMD Ryzen 7 7840HS', 'Upgradeable GPU', '16" 165Hz'], ru: ['AMD Ryzen 7 7840HS', 'Обновляемая GPU', '16" 165 Гц'] } 
  },
  { 
    id: 44, 
    name: { en: 'Gigabyte Aero 16 OLED', ru: 'Gigabyte Aero 16 OLED' }, 
    price: 2299, 
    description: { en: 'Creator laptop with 4K OLED, RTX 4070, color-accurate display.', ru: 'Ноутбук для создателей с 4K OLED, RTX 4070.' }, 
imageUrl: 'https://images.unsplash.com/photo-1522198428577-adf2d374b05b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core i9-13900H', 'RTX 4070 8GB', '16" 4K OLED'], ru: ['Intel Core i9-13900H', 'RTX 4070 8 ГБ', '16" 4K OLED'] } 
  },
  { 
    id: 45, 
    name: { en: 'Lenovo Legion Pro 7i Gen 9', ru: 'Lenovo Legion Pro 7i 9' }, 
    price: 2199, 
    description: { en: 'Gaming laptop with RTX 4080, QHD+ 240Hz, advanced cooling.', ru: 'Игровой ноутбук с RTX 4080, QHD+ 240 Гц.' }, 
imageUrl: 'https://images.unsplash.com/photo-1595245150898-339b88a9d477?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1cmZhY2UlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core i9-14900HX', 'RTX 4080 12GB', 'Legion Coldfront 5.0'], ru: ['Intel Core i9-14900HX', 'RTX 4080 12 ГБ', 'Legion Coldfront 5.0'] } 
  },
  { 
    id: 46, 
    name: { en: 'ASUS Zenbook Pro 14 OLED', ru: 'ASUS Zenbook Pro 14 OLED' }, 
    price: 1299, 
    description: { en: 'Premium ultrabook with Intel Core Ultra, 3K OLED, ASUS Dial.', ru: 'Премиальный ультрабук с Intel Core Ultra, 3K OLED.' }, 
imageUrl: 'https://images.unsplash.com/photo-1612688242445-c057ca80e837?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core Ultra 9 185H', '14.5" 3K OLED 120Hz', 'ASUS Dial'], ru: ['Intel Core Ultra 9 185H', '14.5" 3K OLED 120 Гц', 'ASUS Dial'] } 
  },
  { 
    id: 47, 
    name: { en: 'HP Omen Transcend 16', ru: 'HP Omen Transcend 16' }, 
    price: 1999, 
    description: { en: 'Sleek gaming laptop with RTX 4070, thin and light design.', ru: 'Элегантный игровой ноутбук с RTX 4070, тонкий дизайн.' }, 
imageUrl: 'https://images.unsplash.com/photo-1733313172502-f588bdef46bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxpZW53YXJlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core Ultra 7 155H', 'RTX 4070 8GB', '16" 240Hz'], ru: ['Intel Core Ultra 7 155H', 'RTX 4070 8 ГБ', '16" 240 Гц'] } 
  },
  { 
    id: 48, 
    name: { en: 'Alienware m18 R2', ru: 'Alienware m18 R2' }, 
    price: 3499, 
    description: { en: 'Massive gaming beast with 18" QHD+ display, RTX 4090.', ru: 'Массивный игровой зверь с 18" дисплеем, RTX 4090.' }, 
imageUrl: 'https://plus.unsplash.com/premium_photo-1733266836449-b99737759127?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsaWVud2FyZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core i9-14900HX', 'RTX 4090 16GB', 'Cherry MX keys'], ru: ['Intel Core i9-14900HX', 'RTX 4090 16 ГБ', 'Cherry MX клавиши'] } 
  },
  { 
    id: 49, 
    name: { en: 'Samsung Galaxy Book4 Ultra', ru: 'Samsung Galaxy Book4 Ultra' }, 
    price: 2399, 
    description: { en: 'Creator laptop with Dynamic AMOLED 2X, RTX 4070, S Pen.', ru: 'Ноутбук для создателей с Dynamic AMOLED 2X, RTX 4070.' }, 
imageUrl: 'https://images.unsplash.com/photo-1708164332894-4773108590cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsaWVud2FyZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core Ultra 9 185H', 'RTX 4070 8GB', 'S Pen included'], ru: ['Intel Core Ultra 9 185H', 'RTX 4070 8 ГБ', 'S Pen в комплекте'] } 
  },
  { 
    id: 50, 
    name: { en: 'Acer Swift Go 14 OLED', ru: 'Acer Swift Go 14 OLED' }, 
    price: 899, 
    originalPrice: 999, 
    description: { en: 'Affordable OLED laptop with Intel Core Ultra, great battery.', ru: 'Доступный OLED ноутбук с Intel Core Ultra.' }, 
imageUrl: 'https://images.unsplash.com/photo-1556583186-c7b22658adea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWNlciUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Intel Core Ultra 7 155H', '14" 2.8K OLED', '12h battery'], ru: ['Intel Core Ultra 7 155H', '14" 2.8K OLED', '12 ч батарея'] } 
  },
  { 
    id: 51, 
    name: { en: 'Apple MacBook Air 15" M3', ru: 'Apple MacBook Air 15" M3' }, 
    price: 1499, 
    description: { en: 'Thin and light 15" laptop with M3 chip, silent operation.', ru: 'Тонкий 15" ноутбук с чипом M3, бесшумная работа.' }, 
imageUrl: 'https://images.unsplash.com/photo-1685944446526-c0b645d58254?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9vayUyMHBybyUyMDE0fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Laptops', ru: 'Ноутбуки' }, 
    specs: { en: ['Apple M3 8-core', '15.3" Liquid Retina', 'Up to 18h battery'], ru: ['Apple M3 8-ядерный', '15.3" Liquid Retina', 'До 18 ч батарея'] } 
  },
  // Headphones (ID 52-66)
  { 
    id: 52, 
    name: { en: 'Sony WH-1000XM5', ru: 'Sony WH-1000XM5' }, 
    price: 399, 
    description: { en: 'Industry-leading ANC headphones with 30h battery, LDAC codec.', ru: 'Лучшее в классе ANC наушники с батареей 30 ч, кодеком LDAC.' }, 
imageUrl: 'https://images.unsplash.com/photo-1733041055704-da53567e49da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['ANC: Industry-leading', 'Battery: 30 hours', 'Codec: LDAC + AAC'], ru: ['ANC: Лучшее в классе', 'Батарея: 30 часов', 'Кодек: LDAC + AAC'] } 
  },
  { 
    id: 53, 
    name: { en: 'Apple AirPods Max', ru: 'Apple AirPods Max' }, 
    price: 549, 
    description: { en: 'Premium over-ear with spatial audio, Apple H1 chip, aluminum build.', ru: 'Премиальные накладные с пространственным аудио, чипом H1.' }, 
imageUrl: 'https://images.unsplash.com/photo-1612116454817-2b0841e30eaf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['Chip: Apple H1', 'ANC: Active noise cancellation', 'Spatial Audio'], ru: ['Чип: Apple H1', 'ANC: Активное шумоподавление', 'Пространственное аудио'] } 
  },
  { 
    id: 54, 
    name: { en: 'Bose QuietComfort Ultra', ru: 'Bose QuietComfort Ultra' }, 
    price: 429, 
    description: { en: 'Premium ANC headphones with Immersive Audio, all-day comfort.', ru: 'Премиальные ANC наушники с иммерсивным аудио.' }, 
imageUrl: 'https://images.unsplash.com/photo-1566286378558-5d52a6710b6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['ANC: QuietComfort technology', 'Immersive Audio mode', '24h battery'], ru: ['ANC: Технология QuietComfort', 'Режим иммерсивного аудио', 'Батарея 24 ч'] } 
  },
  { 
    id: 55, 
    name: { en: 'Sennheiser Momentum 4', ru: 'Sennheiser Momentum 4' }, 
    price: 379, 
    description: { en: 'Audiophile-grade wireless with 60h battery, adaptive ANC.', ru: 'Аудиофильские беспроводные с батареей 60 ч, адаптивным ANC.' }, 
imageUrl: 'https://images.unsplash.com/photo-1754142654796-cafbcb9f633b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['Driver: 42mm transducer', 'ANC: Adaptive', 'Battery: 60 hours'], ru: ['Драйвер: 42 мм преобразователь', 'ANC: Адаптивное', 'Батарея: 60 часов'] } 
  },
  { 
    id: 56, 
    name: { en: 'Bowers & Wilkins PX8', ru: 'Bowers & Wilkins PX8' }, 
    price: 699, 
    description: { en: 'Luxury headphones with carbon fiber drivers, premium materials.', ru: 'Люксовые наушники с углеродными драйверами, премиальные материалы.' }, 
imageUrl: 'https://images.unsplash.com/photo-1737291937135-3a0fcb5e0c44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['Driver: Carbon fiber', 'ANC: Adaptive', 'aptX Adaptive'], ru: ['Драйвер: Углеродное волокно', 'ANC: Адаптивное', 'aptX Adaptive'] } 
  },
  { 
    id: 57, 
    name: { en: 'Jabra Elite 10', ru: 'Jabra Elite 10' }, 
    price: 279, 
    description: { en: 'Premium TWS earbuds with Dolby Atmos, advanced ANC.', ru: 'Премиальные TWS наушники с Dolby Atmos, продвинутым ANC.' }, 
imageUrl: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['ANC: Advanced hybrid', 'Dolby Atmos support', '6h + 21h case'], ru: ['ANC: Продвинутое гибридное', 'Поддержка Dolby Atmos', '6 ч + 21 ч кейс'] } 
  },
  { 
    id: 58, 
    name: { en: 'Samsung Galaxy Buds3 Pro', ru: 'Samsung Galaxy Buds3 Pro' }, 
    price: 249, 
    description: { en: 'Premium TWS with blade design, 360 Audio, intelligent ANC.', ru: 'Премиальные TWS с дизайном blade, 360 аудио, умным ANC.' }, 
imageUrl: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['ANC: Intelligent adaptive', '360 Audio', 'Canal + Open design'], ru: ['ANC: Умное адаптивное', '360 аудио', 'Канальный + открытый дизайн'] } 
  },
  { 
    id: 59, 
    name: { en: 'Beats Studio Pro', ru: 'Beats Studio Pro' }, 
    price: 349, 
    originalPrice: 399, 
    description: { en: 'Spatial audio headphones with USB-C lossless, 40h battery.', ru: 'Наушники с пространственным аудио, USB-C без потерь.' }, 
imageUrl: 'https://images.unsplash.com/photo-1558477937-3e9e70fad118?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['Spatial Audio', 'USB-C lossless audio', '40h battery'], ru: ['Пространственное аудио', 'USB-C аудио без потерь', 'Батарея 40 ч'] } 
  },
  { 
    id: 60, 
    name: { en: 'Anker Soundcore Space Q45', ru: 'Anker Soundcore Space Q45' }, 
    price: 149, 
    description: { en: 'Budget ANC headphones with 50h battery, great sound quality.', ru: 'Бюджетные ANC наушники с батареей 50 ч, отличный звук.' }, 
imageUrl: 'https://images.unsplash.com/photo-1505740106531-4243f3831c78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['ANC: Adaptive', 'Battery: 50 hours', 'LDAC codec'], ru: ['ANC: Адаптивное', 'Батарея: 50 часов', 'Кодек LDAC'] } 
  },
  { 
    id: 61, 
    name: { en: 'Audio-Technica ATH-M50xBT2', ru: 'Audio-Technica ATH-M50xBT2' }, 
    price: 199, 
    description: { en: 'Professional studio monitor headphones, wireless version.', ru: 'Профессиональные студийные мониторные наушники, беспроводная версия.' }, 
imageUrl: 'https://images.unsplash.com/photo-1761120359417-e7b609cef1ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['Driver: 45mm', 'Studio monitor sound', '50h battery'], ru: ['Драйвер: 45 мм', 'Студийный мониторный звук', 'Батарея 50 ч'] } 
  },
  { 
    id: 62, 
    name: { en: 'Shokz OpenRun Pro', ru: 'Shokz OpenRun Pro' }, 
    price: 179, 
    description: { en: 'Bone conduction headphones for sports with IP55 water resistance.', ru: 'Костные наушники для спорта с IP55 защитой от воды.' }, 
imageUrl: 'https://images.unsplash.com/photo-1505751104546-4b63c93054b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['Technology: Bone conduction', 'IP55: Water resistant', '10h battery'], ru: ['Технология: Костная проводимость', 'IP55: Водозащита', 'Батарея 10 ч'] } 
  },
  { 
    id: 63, 
    name: { en: 'SteelSeries Arctis Nova Pro', ru: 'SteelSeries Arctis Nova Pro' }, 
    price: 349, 
    description: { en: 'Premium gaming headset with active ANC, GameDAC Gen 2.', ru: 'Премиальная игровая гарнитура с активным ANC, GameDAC Gen 2.' }, 
imageUrl: 'https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['ANC: Active', 'GameDAC Gen 2', '360° Spatial Audio'], ru: ['ANC: Активное', 'GameDAC Gen 2', '360° пространственное аудио'] } 
  },
  { 
    id: 64, 
    name: { en: 'HyperX Cloud Alpha Wireless', ru: 'HyperX Cloud Alpha Wireless' }, 
    price: 199, 
    description: { en: 'Gaming headset with industry-leading 300h battery life.', ru: 'Игровая гарнитура с рекордной батареей 300 ч.' }, 
imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['Battery: 300 hours', 'Driver: Dual chamber', 'DTS:X Spatial Audio'], ru: ['Батарея: 300 часов', 'Драйвер: Двухкамерный', 'DTS:X пространственное аудио'] } 
  },
  { 
    id: 65, 
    name: { en: 'Razer Barracuda Pro', ru: 'Razer Barracuda Pro' }, 
    price: 249, 
    description: { en: 'Hybrid gaming/lifestyle headphones with THX, SmartSwitch.', ru: 'Гибридные игровые/lifestyle наушники с THX, SmartSwitch.' }, 
imageUrl: 'https://images.unsplash.com/photo-1568200717312-9f9bb27c00f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['THX AAA drivers', 'SmartSwitch multi-device', 'ANC hybrid'], ru: ['THX AAA драйверы', 'SmartSwitch мульти-устройство', 'ANC гибридное'] } 
  },
  { 
    id: 66, 
    name: { en: 'Technics EAH-A800', ru: 'Technics EAH-A800' }, 
    price: 299, 
    description: { en: 'Audiophile wireless headphones with LDAC, premium sound.', ru: 'Аудиофильские беспроводные наушники с LDAC, премиальный звук.' }, 
imageUrl: 'https://images.unsplash.com/photo-1568200717312-9f9bb27c00f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Headphones', ru: 'Наушники' }, 
    specs: { en: ['Driver: 40mm', 'LDAC codec', '50h battery'], ru: ['Драйвер: 40 мм', 'Кодек LDAC', 'Батарея 50 ч'] } 
  },
  // TVs (ID 67-81)
  { 
    id: 67, 
    name: { en: 'Samsung S95D 65" QD-OLED', ru: 'Samsung S95D 65" QD-OLED' }, 
    price: 2999, 
    description: { en: 'Flagship QD-OLED TV with Neural Quantum Processor, 144Hz gaming.', ru: 'Флагманский QD-OLED ТВ с Neural Quantum процессором, 144 Гц для игр.' }, 
imageUrl: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHR2fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" QD-OLED 4K', 'Refresh: 144Hz', 'HDR: HDR10+'], ru: ['Дисплей: 65" QD-OLED 4K', 'Частота: 144 Гц', 'HDR: HDR10+'] } 
  },
  { 
    id: 68, 
    name: { en: 'LG G4 77" OLED evo', ru: 'LG G4 77" OLED evo' }, 
    price: 3799, 
    description: { en: 'Premium OLED with α11 AI processor, Brightness Booster Max.', ru: 'Премиальный OLED с α11 AI процессором, Brightness Booster Max.' }, 
imageUrl: 'https://images.unsplash.com/photo-1582072291448-5db861a71699?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGclMjB0dnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 77" OLED evo', 'Processor: α11 AI', 'HDR: Dolby Vision IQ'], ru: ['Дисплей: 77" OLED evo', 'Процессор: α11 AI', 'HDR: Dolby Vision IQ'] } 
  },
  { 
    id: 69, 
    name: { en: 'Sony A95L 65" QD-OLED', ru: 'Sony A95L 65" QD-OLED' }, 
    price: 3299, 
    description: { en: 'Master Series QD-OLED with Cognitive Processor XR, perfect for PS5.', ru: 'Серия Master QD-OLED с Cognitive Processor XR, идеален для PS5.' }, 
imageUrl: 'https://images.unsplash.com/photo-1589147310385-77affb5b6513?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHR2fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" QD-OLED 4K', 'Processor: Cognitive XR', '120Hz + VRR'], ru: ['Дисплей: 65" QD-OLED 4K', 'Процессор: Cognitive XR', '120 Гц + VRR'] } 
  },
  { 
    id: 70, 
    name: { en: 'TCL QM8 75" Mini-LED', ru: 'TCL QM8 75" Mini-LED' }, 
    price: 1999, 
    description: { en: 'Budget Mini-LED with 5000+ zones, 144Hz for gaming.', ru: 'Бюджетный Mini-LED с 5000+ зонами, 144 Гц для игр.' }, 
imageUrl: 'https://plus.unsplash.com/premium_photo-1683141392308-aaa39d916686?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjB0dnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 75" Mini-LED 4K', 'Dimming: 5000+ zones', '144Hz gaming'], ru: ['Дисплей: 75" Mini-LED 4K', 'Затемнение: 5000+ зон', '144 Гц игры'] } 
  },
  { 
    id: 71, 
    name: { en: 'Hisense U8N 65" Mini-LED', ru: 'Hisense U8N 65" Mini-LED' }, 
    price: 1499, 
    description: { en: 'Value Mini-LED TV with 1500+ zones, 144Hz, great brightness.', ru: 'Доступный Mini-LED ТВ с 1500+ зонами, 144 Гц.' }, 
imageUrl: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdCUyMHNjcmVlbiUyMHR2fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" Mini-LED 4K', 'Brightness: 3000 nits', '144Hz VRR'], ru: ['Дисплей: 65" Mini-LED 4K', 'Яркость: 3000 нит', '144 Гц VRR'] } 
  },
  { 
    id: 72, 
    name: { en: 'Philips OLED 908 65"', ru: 'Philips OLED 908 65"' }, 
    price: 2499, 
    description: { en: 'OLED TV with Ambilight, P5 AI processor, Bowers & Wilkins audio.', ru: 'OLED ТВ с Ambilight, P5 AI процессором, аудио Bowers & Wilkins.' }, 
imageUrl: 'https://images.unsplash.com/photo-1586024486164-ce9b3d87e09f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbSUyMHR2fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" OLED 4K', 'Ambilight 4-sided', 'B&W audio'], ru: ['Дисплей: 65" OLED 4K', 'Ambilight 4-сторонний', 'Аудио B&W'] } 
  },
  { 
    id: 73, 
    name: { en: 'Panasonic MZ2000 65" OLED', ru: 'Panasonic MZ2000 65" OLED' }, 
    price: 2799, 
    description: { en: 'Master OLED with HCX Pro AI processor, Dolby Atmos speakers.', ru: 'Master OLED с HCX Pro AI процессором, динамиками Dolby Atmos.' }, 
imageUrl: 'https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" Master OLED', 'Processor: HCX Pro AI', 'Dolby Atmos built-in'], ru: ['Дисплей: 65" Master OLED', 'Процессор: HCX Pro AI', 'Dolby Atmos встроенный'] } 
  },
  { 
    id: 74, 
    name: { en: 'Amazon Fire TV Omni QLED 65"', ru: 'Amazon Fire TV Omni QLED 65"' }, 
    price: 799, 
    description: { en: 'Budget QLED TV with built-in Alexa, Fire TV OS, Ambient mode.', ru: 'Бюджетный QLED ТВ со встроенной Alexa, Fire TV OS.' }, 
imageUrl: 'https://images.unsplash.com/photo-1595935736128-db1f0a261263?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb20lMjB0dnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" QLED 4K', 'Smart: Fire TV OS', 'Voice: Alexa built-in'], ru: ['Дисплей: 65" QLED 4K', 'Smart: Fire TV OS', 'Голос: Alexa встроенная'] } 
  },
  { 
    id: 75, 
    name: { en: 'Vizio Quantum Pro 75"', ru: 'Vizio Quantum Pro 75"' }, 
    price: 1699, 
    description: { en: 'Large 4K TV with Quantum Color, 120Hz, ProGaming Engine.', ru: 'Большой 4K ТВ с Quantum Color, 120 Гц, ProGaming движком.' }, 
imageUrl: 'https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbSUyMHR2fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 75" QLED 4K', '120Hz native', 'Quantum Color'], ru: ['Дисплей: 75" QLED 4K', '120 Гц нативно', 'Quantum Color'] } 
  },
  { 
    id: 76, 
    name: { en: 'Sharp Aquos XLED 65"', ru: 'Sharp Aquos XLED 65"' }, 
    price: 1899, 
    description: { en: 'Innovative XLED technology combining Mini-LED and OLED benefits.', ru: 'Инновационная технология XLED, объединяющая Mini-LED и OLED.' }, 
imageUrl: 'https://images.unsplash.com/photo-1611755489400-3c53602ab783?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmluZyUyMHJvb20lMjB0dnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" XLED 4K', 'Brightness: 2000 nits', '120Hz gaming'], ru: ['Дисплей: 65" XLED 4K', 'Яркость: 2000 нит', '120 Гц игры'] } 
  },
  { 
    id: 77, 
    name: { en: 'Roku Plus Series 65" QLED', ru: 'Roku Plus Series 65" QLED' }, 
    price: 649, 
    description: { en: 'Budget-friendly QLED with Roku OS, voice remote, HDR10+.', ru: 'Доступный QLED с Roku OS, голосовым пультом, HDR10+.' }, 
imageUrl: 'https://images.unsplash.com/photo-1636206508343-a6c955887476?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGl2aW5nJTIwcm9vbSUyMHR2fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" QLED 4K', 'Smart: Roku OS', 'HDR: HDR10+'], ru: ['Дисплей: 65" QLED 4K', 'Smart: Roku OS', 'HDR: HDR10+'] } 
  },
  { 
    id: 78, 
    name: { en: 'Xiaomi TV S Pro 75"', ru: 'Xiaomi TV S Pro 75"' }, 
    price: 1199, 
    description: { en: 'Value Mini-LED TV with QLED Quantum Dot, 144Hz gaming mode.', ru: 'Доступный Mini-LED ТВ с QLED Quantum Dot, игровым режимом 144 Гц.' }, 
imageUrl: 'https://images.unsplash.com/photo-1631679893114-7957e44879db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb20lMjB0dnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 75" Mini-LED 4K', 'QLED Quantum Dot', '144Hz'], ru: ['Дисплей: 75" Mini-LED 4K', 'QLED Quantum Dot', '144 Гц'] } 
  },
  { 
    id: 79, 
    name: { en: 'OnePlus TV Q2 Pro 65"', ru: 'OnePlus TV Q2 Pro 65"' }, 
    price: 1099, 
    description: { en: 'Premium QLED TV with 120Hz, Dolby Vision, Android TV.', ru: 'Премиальный QLED ТВ с 120 Гц, Dolby Vision, Android TV.' }, 
imageUrl: 'https://images.unsplash.com/photo-1593784991251-92ded75ea290?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmluZyUyMHJvb20lMjB0dnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 65" QLED 4K', '120Hz native', 'Android TV 12'], ru: ['Дисплей: 65" QLED 4K', '120 Гц нативно', 'Android TV 12'] } 
  },
  { 
    id: 80, 
    name: { en: 'Skyworth S9D Max 75" OLED', ru: 'Skyworth S9D Max 75" OLED' }, 
    price: 2199, 
    description: { en: 'Large OLED TV with AI processor, 120Hz, great for home cinema.', ru: 'Большой OLED ТВ с AI процессором, 120 Гц для домашнего кинотеатра.' }, 
imageUrl: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpdmluZyUyMHJvb20lMjB0dnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 75" OLED 4K', 'AI upscaling', '120Hz'], ru: ['Дисплей: 75" OLED 4K', 'AI апскейлинг', '120 Гц'] } 
  },
  { 
    id: 81, 
    name: { en: 'Toshiba Fire TV 4K 55"', ru: 'Toshiba Fire TV 4K 55"' }, 
    price: 449, 
    originalPrice: 549, 
    description: { en: 'Affordable 4K TV with Fire TV OS, Alexa voice control, HDR.', ru: 'Доступный 4K ТВ с Fire TV OS, голосовым Alexa, HDR.' }, 
imageUrl: 'https://images.unsplash.com/photo-1521607630287-ee2e81ad3ced?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbSUyMHR2fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'TVs', ru: 'Телевизоры' }, 
    specs: { en: ['Display: 55" LED 4K', 'Smart: Fire TV OS', 'Alexa built-in'], ru: ['Дисплей: 55" LED 4K', 'Smart: Fire TV OS', 'Alexa встроенная'] } 
  },
 // Gaming Consoles (ID 82-96)
  { 
    id: 82, 
    name: { en: 'PlayStation 5 Pro', ru: 'PlayStation 5 Pro' }, 
    price: 699, 
    description: { en: 'Enhanced PS5 with 2TB SSD, advanced ray tracing, 8K support.', ru: 'Улучшенная PS5 с 2 ТБ SSD, продвинутым трассировкой лучей, 8K.' }, 
imageUrl: 'https://plus.unsplash.com/premium_photo-1677589330393-e458a706f352?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['GPU: 16.7 TFLOPS', 'Storage: 2TB SSD', 'Ray tracing: Advanced'], ru: ['GPU: 16.7 терафлопс', 'Память: 2 ТБ SSD', 'Трассировка лучей: Продвинутая'] } 
  },
  { 
    id: 83, 
    name: { en: 'Xbox Series X', ru: 'Xbox Series X' }, 
    price: 499, 
    description: { en: 'Powerful 4K gaming console with 1TB SSD, Game Pass library.', ru: 'Мощная 4K игровая консоль с 1 ТБ SSD, библиотекой Game Pass.' }, 
imageUrl: 'https://plus.unsplash.com/premium_photo-1671307118462-913a8cf313dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eGJveCUyMHNlcmllcyUyMHh8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['GPU: 12 TFLOPS', '1TB SSD', 'Game Pass'], ru: ['GPU: 12 терафлопс', '1 ТБ SSD', 'Game Pass'] } 
  },
  { 
    id: 84, 
    name: { en: 'Nintendo Switch OLED', ru: 'Nintendo Switch OLED' }, 
    price: 349, 
    description: { en: 'Hybrid console with vibrant 7" OLED screen, Nintendo exclusives.', ru: 'Гибридная консоль с 7" OLED экраном, эксклюзивами Nintendo.' }, 
imageUrl: 'https://images.unsplash.com/photo-1715081406790-7f1fbb0f88d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5pbnRlbmRvJTIwc3dpdGNoJTIwb2xlZHxlbnwwfHx8fDE3NjIwOTExODd8MA&force=true&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['Display: 7" OLED', 'Mode: Handheld + TV', 'Battery: 4.5-9h'], ru: ['Дисплей: 7" OLED', 'Режим: Портатив + ТВ', 'Батарея: 4.5-9 ч'] } 
  },
  { 
    id: 85, 
    name: { en: 'Steam Deck OLED', ru: 'Steam Deck OLED' }, 
    price: 549, 
    description: { en: 'Portable PC gaming with 7.4" HDR OLED, plays entire Steam library.', ru: 'Портативный ПК-гейминг с 7.4" HDR OLED, играет всю библиотеку Steam.' }, 
imageUrl: 'https://plus.unsplash.com/premium_photo-1724140326605-a91a120d9f52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RlYW0lMjBkZWNrfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['Display: 7.4" OLED HDR', 'APU: Custom AMD', 'Storage: 512GB'], ru: ['Дисплей: 7.4" OLED HDR', 'APU: Кастомный AMD', 'Память: 512 ГБ'] } 
  },
  { 
    id: 86, 
    name: { en: 'ASUS ROG Ally X', ru: 'ASUS ROG Ally X' }, 
    price: 799, 
    description: { en: 'Powerful handheld with Ryzen Z1 Extreme, 120Hz display, Windows 11.', ru: 'Мощный портативный с Ryzen Z1 Extreme, дисплеем 120 Гц, Windows 11.' }, 
imageUrl: 'https://images.unsplash.com/photo-1755436613093-10e44e9e86a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['APU: Ryzen Z1 Extreme', 'Display: 7" 120Hz', 'OS: Windows 11'], ru: ['APU: Ryzen Z1 Extreme', 'Дисплей: 7" 120 Гц', 'ОС: Windows 11'] } 
  },
  { 
    id: 87, 
    name: { en: 'Lenovo Legion Go', ru: 'Lenovo Legion Go' }, 
    price: 699, 
    description: { en: 'Detachable handheld PC with 8.8" QHD+ 144Hz, Windows 11.', ru: 'Отсоединяемый портативный ПК с 8.8" QHD+ 144 Гц, Windows 11.' }, 
imageUrl: 'https://images.unsplash.com/photo-1761000155355-80d87c738333?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['APU: Ryzen Z1 Extreme', 'Display: 8.8" QHD+ 144Hz', 'Detachable controllers'], ru: ['APU: Ryzen Z1 Extreme', 'Дисплей: 8.8" QHD+ 144 Гц', 'Отсоединяемые контроллеры'] } 
  },
  { 
    id: 88, 
    name: { en: 'Anbernic RG556', ru: 'Anbernic RG556' }, 
    price: 199, 
    description: { en: 'Retro gaming handheld with 5.48" AMOLED, plays classic systems.', ru: 'Ретро игровая портативная консоль с 5.48" AMOLED.' }, 
imageUrl: 'https://images.unsplash.com/photo-1761395014113-d7ee4853247a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['Display: 5.48" AMOLED', 'Emulation: Multi-system', 'Battery: 6h'], ru: ['Дисплей: 5.48" AMOLED', 'Эмуляция: Мульти-системы', 'Батарея: 6 ч'] } 
  },
  { 
    id: 89, 
    name: { en: 'Ayaneo Kun', ru: 'Ayaneo Kun' }, 
    price: 1299, 
    description: { en: 'Premium handheld with 8.4" display, Ryzen 7 7840U, best battery.', ru: 'Премиальная портативная с 8.4" дисплеем, Ryzen 7 7840U.' }, 
imageUrl: 'https://images.unsplash.com/photo-1574466737214-a4f3b44a1517?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['CPU: Ryzen 7 7840U', 'Display: 8.4" IPS', 'Battery: 75Wh'], ru: ['CPU: Ryzen 7 7840U', 'Дисплей: 8.4" IPS', 'Батарея: 75 Втч'] } 
  },
  { 
    id: 90, 
    name: { en: 'GPD Win Mini', ru: 'GPD Win Mini' }, 
    price: 899, 
    description: { en: 'Compact 7" handheld PC with Ryzen 7 7840U, clamshell design.', ru: 'Компактный 7" портативный ПК с Ryzen 7 7840U, раскладной дизайн.' }, 
imageUrl: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eGJveCUyMHNlcmllcyUyMHh8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['CPU: Ryzen 7 7840U', 'Display: 7" IPS', 'Clamshell design'], ru: ['CPU: Ryzen 7 7840U', 'Дисплей: 7" IPS', 'Раскладной дизайн'] } 
  },
  { 
    id: 91, 
    name: { en: 'Analogue Pocket', ru: 'Analogue Pocket' }, 
    price: 249, 
    description: { en: 'Premium retro handheld with FPGA, plays original Game Boy cartridges.', ru: 'Премиальная ретро портативная с FPGA, играет оригинальные Game Boy картриджи.' }, 
imageUrl: 'https://images.unsplash.com/photo-1696621629216-dfed30d4427d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['Display: 3.5" LCD 615 PPI', 'FPGA: Original hardware', 'Cartridge: GB/GBC/GBA'], ru: ['Дисплей: 3.5" LCD 615 PPI', 'FPGA: Оригинальное железо', 'Картридж: GB/GBC/GBA'] } 
  },
  { 
    id: 92, 
    name: { en: 'Evercade EXP', ru: 'Evercade EXP' }, 
    price: 149, 
    description: { en: 'Retro gaming handheld with physical cartridges, curated games.', ru: 'Ретро игровая портативная с физическими картриджами.' }, 
imageUrl: 'https://images.unsplash.com/photo-1744472701199-06cff831b61b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['Display: 4.3" IPS', 'Format: Physical cartridges', 'Battery: 4-5h'], ru: ['Дисплей: 4.3" IPS', 'Формат: Физические картриджи', 'Батарея: 4-5 ч'] } 
  },
  { 
    id: 93, 
    name: { en: 'Miyoo Mini Plus', ru: 'Miyoo Mini Plus' }, 
    price: 79, 
    description: { en: 'Ultra-compact retro handheld, plays NES, SNES, GBA, PSX.', ru: 'Ультракомпактная ретро портативная, играет NES, SNES, GBA, PSX.' }, 
imageUrl: 'https://images.unsplash.com/photo-1571025443281-281bff33aa3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['Display: 3.5" IPS', 'Emulation: Multi-system', 'Size: Pocket-sized'], ru: ['Дисплей: 3.5" IPS', 'Эмуляция: Мульти-системы', 'Размер: Карманный'] } 
  },
  { 
    id: 94, 
    name: { en: 'Panic Playdate', ru: 'Panic Playdate' }, 
    price: 199, 
    description: { en: 'Unique indie handheld with crank controller, black & white screen.', ru: 'Уникальная инди портативная с ручкой-контроллером, черно-белым экраном.' }, 
imageUrl: 'https://images.unsplash.com/photo-1755436613073-a23c41b978c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['Display: 2.7" B&W', 'Controller: Crank + D-pad', 'Games: Season updates'], ru: ['Дисплей: 2.7" Ч/Б', 'Контроллер: Ручка + D-pad', 'Игры: Сезонные обновления'] } 
  },
  { 
    id: 95, 
    name: { en: 'Retroid Pocket 4 Pro', ru: 'Retroid Pocket 4 Pro' }, 
    price: 219, 
    description: { en: 'Powerful retro handheld with Snapdragon 8+ Gen 1, plays up to PS2.', ru: 'Мощная ретро портативная со Snapdragon 8+ Gen 1, играет до PS2.' }, 
imageUrl: 'https://images.unsplash.com/photo-1656662962127-d8344d924d74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYW0lMjBkZWNrfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['Processor: Snapdragon 8+ Gen 1', 'Display: 4.7" AMOLED', 'Emulation: Up to PS2'], ru: ['Процессор: Snapdragon 8+ Gen 1', 'Дисплей: 4.7" AMOLED', 'Эмуляция: До PS2'] } 
  },
  { 
    id: 96, 
    name: { en: 'Xbox Series S', ru: 'Xbox Series S' }, 
    price: 299, 
    originalPrice: 349, 
    description: { en: 'Compact all-digital console, great for 1440p gaming, Game Pass.', ru: 'Компактная цифровая консоль, отлично для 1440p, Game Pass.' }, 
imageUrl: 'https://images.unsplash.com/photo-1755589614356-bf6d276f5ca5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Gaming Consoles', ru: 'Игровые консоли' }, 
    specs: { en: ['GPU: 4 TFLOPS', '512GB SSD', 'All-digital'], ru: ['GPU: 4 терафлопс', '512 ГБ SSD', 'Полностью цифровая'] } 
  },
  // Tablets (ID 97-111)
  { 
    id: 97, 
    name: { en: 'iPad Pro 13" M4', ru: 'iPad Pro 13" M4' }, 
    price: 1299, 
    description: { en: 'Ultra-thin Pro tablet with M4 chip, Tandem OLED, Apple Pencil Pro.', ru: 'Ультратонкий Pro планшет с чипом M4, Tandem OLED, Apple Pencil Pro.' }, 
imageUrl: 'https://plus.unsplash.com/premium_photo-1724249993404-77946fd600e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBpcGFkJTIwcHJvfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Chip: Apple M4', 'Display: 13" Tandem OLED', 'Pencil Pro support'], ru: ['Чип: Apple M4', 'Дисплей: 13" Tandem OLED', 'Поддержка Pencil Pro'] } 
  },
  { 
    id: 98, 
    name: { en: 'Samsung Galaxy Tab S9 Ultra', ru: 'Samsung Galaxy Tab S9 Ultra' }, 
    price: 1199, 
    description: { en: 'Giant 14.6" AMOLED tablet with S Pen, DeX mode, IP68.', ru: 'Гигантский 14.6" AMOLED планшет с S Pen, режимом DeX, IP68.' }, 
imageUrl: 'https://images.unsplash.com/photo-1604404439625-976a22785855?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Display: 14.6" AMOLED', 'S Pen included', 'IP68 water resistant'], ru: ['Дисплей: 14.6" AMOLED', 'S Pen в комплекте', 'IP68 водозащита'] } 
  },
  { 
    id: 99, 
    name: { en: 'Microsoft Surface Pro 10', ru: 'Microsoft Surface Pro 10' }, 
    price: 1099, 
    description: { en: 'Versatile 2-in-1 with Intel Core Ultra, Windows 11, detachable keyboard.', ru: 'Универсальный 2-в-1 с Intel Core Ultra, Windows 11, отсоединяемой клавиатурой.' }, 
imageUrl: 'https://plus.unsplash.com/premium_photo-1669749354010-f2783f958591?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['CPU: Intel Core Ultra', 'Display: 13" PixelSense', 'Keyboard: Type Cover'], ru: ['CPU: Intel Core Ultra', 'Дисплей: 13" PixelSense', 'Клавиатура: Type Cover'] } 
  },
  { 
    id: 100, 
    name: { en: 'Lenovo Tab P12 Pro', ru: 'Lenovo Tab P12 Pro' }, 
    price: 699, 
    description: { en: 'Premium Android tablet with 12.6" AMOLED 120Hz, quad speakers.', ru: 'Премиальный Android планшет с 12.6" AMOLED 120 Гц.' }, 
imageUrl: 'https://images.unsplash.com/photo-1757356747705-8ade2de531fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Display: 12.6" AMOLED 120Hz', 'Speakers: 4x JBL', 'Pen: Precision Pen 3'], ru: ['Дисплей: 12.6" AMOLED 120 Гц', 'Динамики: 4x JBL', 'Перо: Precision Pen 3'] } 
  },
  { 
    id: 101, 
    name: { en: 'Amazon Fire Max 11', ru: 'Amazon Fire Max 11' }, 
    price: 229, 
    description: { en: 'Budget 11" tablet with Fire OS, great for media consumption.', ru: 'Бюджетный 11" планшет с Fire OS, отлично для медиа.' }, 
imageUrl: 'https://images.unsplash.com/photo-1543243783-e1b8ee09e241?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Display: 11" 2K', 'OS: Fire OS', 'Battery: 14h'], ru: ['Дисплей: 11" 2K', 'ОС: Fire OS', 'Батарея: 14 ч'] } 
  },
  { 
    id: 102, 
    name: { en: 'Xiaomi Pad 6S Pro', ru: 'Xiaomi Pad 6S Pro' }, 
    price: 549, 
    description: { en: 'High-performance tablet with Snapdragon 8 Gen 2, 144Hz display.', ru: 'Высокопроизводительный планшет со Snapdragon 8 Gen 2, 144 Гц.' }, 
imageUrl: 'https://images.unsplash.com/photo-1666964991741-ba1fa9b9bdb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Processor: Snapdragon 8 Gen 2', 'Display: 12.4" LCD 144Hz', '10000mAh battery'], ru: ['Процессор: Snapdragon 8 Gen 2', 'Дисплей: 12.4" LCD 144 Гц', 'Батарея 10000 мАч'] } 
  },
  { 
    id: 103, 
    name: { en: 'OnePlus Pad 2', ru: 'OnePlus Pad 2' }, 
    price: 549, 
    description: { en: 'Fast Android tablet with Snapdragon 8 Gen 3, 144Hz display.', ru: 'Быстрый Android планшет со Snapdragon 8 Gen 3, 144 Гц.' }, 
imageUrl: 'https://images.unsplash.com/photo-1568842293346-22b714e801f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Processor: Snapdragon 8 Gen 3', 'Display: 12.1" LCD 144Hz', '67W fast charging'], ru: ['Процессор: Snapdragon 8 Gen 3', 'Дисплей: 12.1" LCD 144 Гц', 'Быстрая зарядка 67 Вт'] } 
  },
  { 
    id: 104, 
    name: { en: 'Huawei MatePad Pro 13.2', ru: 'Huawei MatePad Pro 13.2' }, 
    price: 899, 
    description: { en: 'Giant OLED tablet with M-Pencil, HarmonyOS, multitasking.', ru: 'Гигантский OLED планшет с M-Pencil, HarmonyOS, мультизадачность.' }, 
imageUrl: 'https://images.unsplash.com/photo-1593108409123-2f064dc2397f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Display: 13.2" OLED', 'OS: HarmonyOS', 'M-Pencil Gen 3'], ru: ['Дисплей: 13.2" OLED', 'ОС: HarmonyOS', 'M-Pencil 3-го поколения'] } 
  },
  { 
    id: 105, 
    name: { en: 'Google Pixel Tablet', ru: 'Google Pixel Tablet' }, 
    price: 499, 
    description: { en: 'Smart display tablet with charging dock, Google Tensor G2.', ru: 'Умный планшет-дисплей с док-станцией, Google Tensor G2.' }, 
imageUrl: 'https://images.unsplash.com/photo-1585790051609-09928c362a42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGFkJTIwcHJvfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Chip: Tensor G2', 'Display: 11" LCD', 'Dock: Charging speaker'], ru: ['Чип: Tensor G2', 'Дисплей: 11" LCD', 'Док: Зарядка + динамик'] } 
  },
  { 
    id: 106, 
    name: { en: 'reMarkable 2', ru: 'reMarkable 2' }, 
    price: 399, 
    description: { en: 'E-ink tablet for writing and reading, paper-like feel, distraction-free.', ru: 'E-ink планшет для письма и чтения, ощущение бумаги.' }, 
imageUrl: 'https://plus.unsplash.com/premium_photo-1680461543998-dfdb89a44f5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2luZGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Display: 10.3" E-ink', 'Pen: Marker Plus included', 'Focus: Distraction-free'], ru: ['Дисплей: 10.3" E-ink', 'Перо: Marker Plus в комплекте', 'Фокус: Без отвлечений'] } 
  },
  { 
    id: 107, 
    name: { en: 'Boox Tab Ultra C Pro', ru: 'Boox Tab Ultra C Pro' }, 
    price: 599, 
    description: { en: 'Color E-ink tablet with stylus, Android, perfect for notes and reading.', ru: 'Цветной E-ink планшет со стилусом, Android, идеален для заметок.' }, 
imageUrl: 'https://images.unsplash.com/photo-1646342622814-2bec9a4b521b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2luZGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Display: 10.3" Color E-ink', 'OS: Android 12', 'Pen: Magnetic stylus'], ru: ['Дисплей: 10.3" цветной E-ink', 'ОС: Android 12', 'Перо: Магнитный стилус'] } 
  },
  { 
    id: 108, 
    name: { en: 'iPad mini 7', ru: 'iPad mini 7' }, 
    price: 499, 
    description: { en: 'Compact 8.3" tablet with A17 Pro chip, Apple Pencil support.', ru: 'Компактный 8.3" планшет с чипом A17 Pro, поддержкой Apple Pencil.' }, 
imageUrl: 'https://images.unsplash.com/photo-1553103291-346188e304d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGFkJTIwcHJvfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Chip: A17 Pro', 'Display: 8.3" Liquid Retina', 'Pencil: 2nd gen support'], ru: ['Чип: A17 Pro', 'Дисплей: 8.3" Liquid Retina', 'Pencil: Поддержка 2-го поколения'] } 
  },
  { 
    id: 109, 
    name: { en: 'Honor Pad 9', ru: 'Honor Pad 9' }, 
    price: 329, 
    description: { en: 'Value tablet with 12.1" display, Snapdragon 6, quad speakers.', ru: 'Доступный планшет с 12.1" дисплеем, Snapdragon 6, 4 динамика.' }, 
imageUrl: 'https://images.unsplash.com/photo-1585789720700-12aa07b4a58e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpcGFkJTIwcHJvfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Processor: Snapdragon 6 Gen 1', 'Display: 12.1" LCD 120Hz', 'Speakers: 8x speakers'], ru: ['Процессор: Snapdragon 6 Gen 1', 'Дисплей: 12.1" LCD 120 Гц', 'Динамики: 8 динамиков'] } 
  },
  { 
    id: 110, 
    name: { en: 'Amazon Kindle Scribe', ru: 'Amazon Kindle Scribe' }, 
    price: 339, 
    description: { en: 'E-ink tablet for reading and writing, 10.2" display, pen included.', ru: 'E-ink планшет для чтения и письма, 10.2" дисплей, перо в комплекте.' }, 
imageUrl: 'https://images.unsplash.com/photo-1504598561342-6b76820ef3e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2luZGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Display: 10.2" E-ink 300 PPI', 'Pen: Premium included', 'Storage: 16GB/32GB/64GB'], ru: ['Дисплей: 10.2" E-ink 300 PPI', 'Перо: Premium в комплекте', 'Память: 16/32/64 ГБ'] } 
  },
  { 
    id: 111, 
    name: { en: 'Nokia T21', ru: 'Nokia T21' }, 
    price: 249, 
    description: { en: 'Budget-friendly 10.4" tablet with clean Android, great battery.', ru: 'Бюджетный 10.4" планшет с чистым Android, отличной батареей.' }, 
imageUrl: 'https://images.unsplash.com/photo-1633325825614-c13232a83563?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000&w=800&q=75&auto=format',
    category: { en: 'Tablets', ru: 'Планшеты' }, 
    specs: { en: ['Processor: Unisoc T612', 'Display: 10.4" 2K', 'Battery: 8200mAh'], ru: ['Процессор: Unisoc T612', 'Дисплей: 10.4" 2K', 'Батарея: 8200 мАч'] } 
  }
];