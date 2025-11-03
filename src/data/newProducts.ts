// Новые товары для добавления в mockProducts.ts
// ID начинается с 22

export const newProducts = [
  // === SMARTPHONES (15 items, ID 22-36) ===
  {
    id: 22,
    name: { en: 'Xiaomi 14 Ultra', ru: 'Xiaomi 14 Ultra' },
    price: 1199,
    description: {
      en: 'Flagship with Leica quad camera, Snapdragon 8 Gen 3, and 120W HyperCharge.',
      ru: 'Флагман с четверной камерой Leica, Snapdragon 8 Gen 3 и зарядкой 120 Вт.'
    },
    imageUrl: 'https://picsum.photos/seed/xiaomi14ultra/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 3', 'Display: 6.73" AMOLED 120Hz', 'Camera: 50MP Leica quad system', 'Charging: 120W wired + 80W wireless'],
      ru: ['Процессор: Snapdragon 8 Gen 3', 'Дисплей: 6.73" AMOLED 120 Гц', 'Камера: 50 МП система Leica', 'Зарядка: 120 Вт проводная + 80 Вт беспроводная']
    },
    specifications: {
      en: [
        { label: 'CPU', value: 'Snapdragon 8 Gen 3' },
        { label: 'Display', value: '6.73" AMOLED LTPO' },
        { label: 'RAM', value: '16 GB' },
        { label: 'Storage', value: '512 GB' },
        { label: 'Camera', value: '50MP Leica quad' },
        { label: 'Battery', value: '5000 mAh' }
      ],
      ru: [
        { label: 'Процессор', value: 'Snapdragon 8 Gen 3' },
        { label: 'Дисплей', value: '6.73" AMOLED LTPO' },
        { label: 'ОЗУ', value: '16 ГБ' },
        { label: 'Память', value: '512 ГБ' },
        { label: 'Камера', value: '50 МП Leica четверная' },
        { label: 'Батарея', value: '5000 мАч' }
      ]
    }
  },
  {
    id: 23,
    name: { en: 'Oppo Find X7 Pro', ru: 'Oppo Find X7 Pro' },
    price: 999,
    description: {
      en: 'Premium flagship with Hasselblad camera, periscope telephoto, and stunning design.',
      ru: 'Премиальный флагман с камерой Hasselblad, перископным телеобъективом и потрясающим дизайном.'
    },
    imageUrl: 'https://picsum.photos/seed/oppofindx7/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 3', 'Display: 6.82" AMOLED QHD+', 'Camera: Hasselblad triple 50MP', 'Charging: 100W SuperVOOC'],
      ru: ['Процессор: Snapdragon 8 Gen 3', 'Дисплей: 6.82" AMOLED QHD+', 'Камера: Hasselblad тройная 50 МП', 'Зарядка: 100 Вт SuperVOOC']
    }
  },
  {
    id: 24,
    name: { en: 'Vivo X100 Pro', ru: 'Vivo X100 Pro' },
    price: 899,
    description: {
      en: 'Photography flagship with Zeiss optics, MediaTek Dimensity 9300 chip.',
      ru: 'Фотографический флагман с оптикой Zeiss, чипом MediaTek Dimensity 9300.'
    },
    imageUrl: 'https://picsum.photos/seed/vivox100/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: MediaTek Dimensity 9300', 'Display: 6.78" AMOLED 120Hz', 'Camera: 50MP Zeiss triple', 'Battery: 5400mAh with 120W charging'],
      ru: ['Процессор: MediaTek Dimensity 9300', 'Дисплей: 6.78" AMOLED 120 Гц', 'Камера: 50 МП Zeiss тройная', 'Батарея: 5400 мАч с зарядкой 120 Вт']
    }
  },
  {
    id: 25,
    name: { en: 'Asus ROG Phone 8 Pro', ru: 'Asus ROG Phone 8 Pro' },
    price: 1299,
    description: {
      en: 'Ultimate gaming phone with AeroActive cooling, 165Hz display, and 6000mAh battery.',
      ru: 'Максимальный игровой телефон с охлаждением AeroActive, дисплеем 165 Гц и батареей 6000 мАч.'
    },
    imageUrl: 'https://picsum.photos/seed/rogphone8/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 3', 'Display: 6.78" AMOLED 165Hz', 'Cooling: AeroActive system', 'Battery: 6000mAh + 65W charging'],
      ru: ['Процессор: Snapdragon 8 Gen 3', 'Дисплей: 6.78" AMOLED 165 Гц', 'Охлаждение: Система AeroActive', 'Батарея: 6000 мАч + зарядка 65 Вт']
    }
  },
  {
    id: 26,
    name: { en: 'Nothing Phone (2a)', ru: 'Nothing Phone (2a)' },
    price: 399,
    description: {
      en: 'Mid-range phone with unique Glyph interface, clean Android, and great value.',
      ru: 'Средний сегмент с уникальным интерфейсом Glyph, чистым Android и отличной ценой.'
    },
    imageUrl: 'https://picsum.photos/seed/nothing2a/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: MediaTek Dimensity 7200 Pro', 'Display: 6.7" AMOLED 120Hz', 'Glyph Interface: LED notification system', 'Battery: 5000mAh'],
      ru: ['Процессор: MediaTek Dimensity 7200 Pro', 'Дисплей: 6.7" AMOLED 120 Гц', 'Glyph интерфейс: LED система уведомлений', 'Батарея: 5000 мАч']
    }
  },
  {
    id: 27,
    name: { en: 'Motorola Edge 50 Pro', ru: 'Motorola Edge 50 Pro' },
    price: 599,
    description: {
      en: 'Stylish curved display phone with 50MP triple camera and clean Moto UI.',
      ru: 'Стильный телефон с изогнутым дисплеем, тройной камерой 50 МП и чистым Moto UI.'
    },
    imageUrl: 'https://picsum.photos/seed/motoedge50/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 7 Gen 3', 'Display: 6.7" pOLED curved', 'Camera: 50MP OIS triple', 'Charging: 125W TurboPower'],
      ru: ['Процессор: Snapdragon 7 Gen 3', 'Дисплей: 6.7" pOLED изогнутый', 'Камера: 50 МП OIS тройная', 'Зарядка: 125 Вт TurboPower']
    }
  },
  {
    id: 28,
    name: { en: 'Sony Xperia 1 VI', ru: 'Sony Xperia 1 VI' },
    price: 1399,
    description: {
      en: 'Professional camera phone with 4K 120Hz display, Zeiss optics, and pro video features.',
      ru: 'Профессиональный камерофон с дисплеем 4K 120 Гц, оптикой Zeiss и про-видео функциями.'
    },
    imageUrl: 'https://picsum.photos/seed/xperia1vi/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 3', 'Display: 6.5" 4K HDR OLED 120Hz', 'Camera: Zeiss 48MP triple with Pro mode', 'Audio: 3.5mm jack + stereo speakers'],
      ru: ['Процессор: Snapdragon 8 Gen 3', 'Дисплей: 6.5" 4K HDR OLED 120 Гц', 'Камера: Zeiss 48 МП тройная с Pro режимом', 'Аудио: 3.5 мм разъем + стерео динамики']
    }
  },
  {
    id: 29,
    name: { en: 'Honor Magic 6 Pro', ru: 'Honor Magic 6 Pro' },
    price: 1099,
    description: {
      en: 'AI-powered flagship with Magic Eye camera system and silicon-carbon battery.',
      ru: 'Флагман с ИИ, камерой Magic Eye и кремний-углеродной батареей.'
    },
    imageUrl: 'https://picsum.photos/seed/honormagic6/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 3', 'Display: 6.8" LTPO OLED', 'Camera: 50MP Magic Eye triple', 'Battery: 5600mAh silicon-carbon'],
      ru: ['Процессор: Snapdragon 8 Gen 3', 'Дисплей: 6.8" LTPO OLED', 'Камера: 50 МП Magic Eye тройная', 'Батарея: 5600 мАч кремний-углерод']
    }
  },
  {
    id: 30,
    name: { en: 'Realme GT 6', ru: 'Realme GT 6' },
    price: 549,
    description: {
      en: 'Performance flagship killer with Snapdragon 8s Gen 3 and 120W charging.',
      ru: 'Производительный убийца флагманов со Snapdragon 8s Gen 3 и зарядкой 120 Вт.'
    },
    imageUrl: 'https://picsum.photos/seed/realmegt6/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8s Gen 3', 'Display: 6.7" AMOLED 120Hz', 'Camera: 50MP Sony LYT triple', 'Charging: 120W SuperDart'],
      ru: ['Процессор: Snapdragon 8s Gen 3', 'Дисплей: 6.7" AMOLED 120 Гц', 'Камера: 50 МП Sony LYT тройная', 'Зарядка: 120 Вт SuperDart']
    }
  },
  {
    id: 31,
    name: { en: 'ZTE Axon 60 Ultra', ru: 'ZTE Axon 60 Ultra' },
    price: 799,
    description: {
      en: 'Innovative phone with under-display camera, 200MP main sensor.',
      ru: 'Инновационный телефон с камерой под дисплеем, основной сенсор 200 МП.'
    },
    imageUrl: 'https://picsum.photos/seed/zteaxon60/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 2', 'Display: 6.78" AMOLED with UDC', 'Camera: 200MP main + 64MP telephoto', 'Battery: 5000mAh'],
      ru: ['Процессор: Snapdragon 8 Gen 2', 'Дисплей: 6.78" AMOLED с UDC', 'Камера: 200 МП основная + 64 МП телефото', 'Батарея: 5000 мАч']
    }
  },
  {
    id: 32,
    name: { en: 'Nubia Red Magic 9 Pro', ru: 'Nubia Red Magic 9 Pro' },
    price: 749,
    description: {
      en: 'Gaming beast with built-in cooling fan, 165Hz display, RGB lights.',
      ru: 'Игровой зверь со встроенным вентилятором охлаждения, дисплеем 165 Гц, RGB подсветкой.'
    },
    imageUrl: 'https://picsum.photos/seed/redmagic9/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 3', 'Display: 6.8" AMOLED 165Hz', 'Cooling: Built-in turbo fan', 'Battery: 6500mAh'],
      ru: ['Процессор: Snapdragon 8 Gen 3', 'Дисплей: 6.8" AMOLED 165 Гц', 'Охлаждение: Встроенный турбо-вентилятор', 'Батарея: 6500 мАч']
    }
  },
  {
    id: 33,
    name: { en: 'Google Pixel 9 Pro', ru: 'Google Pixel 9 Pro' },
    price: 1099,
    description: {
      en: 'Next-gen Pixel with Tensor G4, AI photo editing, pure Android 15.',
      ru: 'Pixel нового поколения с Tensor G4, AI-редактированием фото, чистым Android 15.'
    },
    imageUrl: 'https://picsum.photos/seed/pixel9pro/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Google Tensor G4', 'Display: 6.7" LTPO OLED 120Hz', 'Camera: 50MP + 48MP telephoto with AI', 'Software: 7 years of updates'],
      ru: ['Процессор: Google Tensor G4', 'Дисплей: 6.7" LTPO OLED 120 Гц', 'Камера: 50 МП + 48 МП телефото с AI', 'ПО: 7 лет обновлений']
    }
  },
  {
    id: 34,
    name: { en: 'Huawei Pura 70 Ultra', ru: 'Huawei Pura 70 Ultra' },
    price: 1249,
    description: {
      en: 'Premium camera phone with variable aperture, Kirin 9010 chip.',
      ru: 'Премиальный камерофон с изменяемой апертурой, чипом Kirin 9010.'
    },
    imageUrl: 'https://picsum.photos/seed/pura70/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Kirin 9010 5G', 'Display: 6.8" LTPO OLED', 'Camera: Variable aperture main', 'Charging: 100W wired + 80W wireless'],
      ru: ['Процессор: Kirin 9010 5G', 'Дисплей: 6.8" LTPO OLED', 'Камера: Изменяемая апертура', 'Зарядка: 100 Вт проводная + 80 Вт беспроводная']
    }
  },
  {
    id: 35,
    name: { en: 'OnePlus 12R', ru: 'OnePlus 12R' },
    price: 599,
    description: {
      en: 'Value flagship with Snapdragon 8 Gen 2, 100W charging, great display.',
      ru: 'Доступный флагман со Snapdragon 8 Gen 2, зарядкой 100 Вт, отличным дисплеем.'
    },
    imageUrl: 'https://picsum.photos/seed/oneplus12r/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 2', 'Display: 6.78" AMOLED 120Hz', 'Camera: 50MP Sony IMX890', 'Battery: 5500mAh + 100W'],
      ru: ['Процессор: Snapdragon 8 Gen 2', 'Дисплей: 6.78" AMOLED 120 Гц', 'Камера: 50 МП Sony IMX890', 'Батарея: 5500 мАч + 100 Вт']
    }
  },
  {
    id: 36,
    name: { en: 'Poco F6 Pro', ru: 'Poco F6 Pro' },
    price: 449,
    originalPrice: 499,
    description: {
      en: 'Budget flagship with Snapdragon 8 Gen 2, 120W charging, great value.',
      ru: 'Бюджетный флагман со Snapdragon 8 Gen 2, зарядкой 120 Вт, отличная цена.'
    },
    imageUrl: 'https://picsum.photos/seed/pocof6/400/300',
    category: { en: 'Smartphones', ru: 'Смартфоны' },
    specs: {
      en: ['Processor: Snapdragon 8 Gen 2', 'Display: 6.67" AMOLED 120Hz', 'Camera: 50MP triple', 'Charging: 120W HyperCharge'],
      ru: ['Процессор: Snapdragon 8 Gen 2', 'Дисплей: 6.67" AMOLED 120 Гц', 'Камера: 50 МП тройная', 'Зарядка: 120 Вт HyperCharge']
    }
  }
,

  // === LAPTOPS (15 items, ID 37-51) ===
  {
    id: 37,
    name: { en: 'HP Spectre x360 16', ru: 'HP Spectre x360 16' },
    price: 1799,
    description: {
      en: 'Premium 2-in-1 convertible with Intel Core Ultra, OLED display, and gem-cut design.',
      ru: 'Премиальный трансформер с Intel Core Ultra, OLED дисплеем и граненым дизайном.'
    },
    imageUrl: 'https://picsum.photos/seed/hpspectre/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core Ultra 7 155H', 'Display: 16" 3K+ OLED touch', 'RAM: 32GB LPDDR5x', 'Storage: 2TB PCIe Gen4 SSD'],
      ru: ['Процессор: Intel Core Ultra 7 155H', 'Дисплей: 16" 3K+ OLED сенсорный', 'ОЗУ: 32 ГБ LPDDR5x', 'Накопитель: 2 ТБ PCIe Gen4 SSD']
    }
  },
  {
    id: 38,
    name: { en: 'Razer Blade 16', ru: 'Razer Blade 16' },
    price: 2999,
    description: {
      en: 'Ultimate gaming laptop with RTX 4090, Mini-LED display, vapor chamber cooling.',
      ru: 'Максимальный игровой ноутбук с RTX 4090, Mini-LED дисплеем, парокамерным охлаждением.'
    },
    imageUrl: 'https://picsum.photos/seed/razerblade16/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core i9-14900HX', 'GPU: NVIDIA RTX 4090 16GB', 'Display: 16" QHD+ 240Hz Mini-LED', 'Cooling: Vapor chamber'],
      ru: ['Процессор: Intel Core i9-14900HX', 'Видеокарта: NVIDIA RTX 4090 16 ГБ', 'Дисплей: 16" QHD+ 240 Гц Mini-LED', 'Охлаждение: Парокамера']
    }
  },
  {
    id: 39,
    name: { en: 'Microsoft Surface Laptop 6', ru: 'Microsoft Surface Laptop 6' },
    price: 1499,
    description: {
      en: 'Elegant productivity laptop with Snapdragon X Elite, AI features, all-day battery.',
      ru: 'Элегантный продуктивный ноутбук с Snapdragon X Elite, AI функциями, батареей на весь день.'
    },
    imageUrl: 'https://picsum.photos/seed/surface6/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Snapdragon X Elite', 'Display: 13.8" PixelSense touchscreen', 'AI: Copilot+ PC features', 'Battery: Up to 22 hours'],
      ru: ['Процессор: Snapdragon X Elite', 'Дисплей: 13.8" PixelSense сенсорный', 'ИИ: Функции Copilot+ PC', 'Батарея: До 22 часов']
    }
  },
  {
    id: 40,
    name: { en: 'Acer Predator Helios 18', ru: 'Acer Predator Helios 18' },
    price: 2499,
    description: {
      en: 'Large gaming powerhouse with 18" display, RTX 4080, advanced cooling.',
      ru: 'Крупный игровой монстр с 18" дисплеем, RTX 4080, продвинутым охлаждением.'
    },
    imageUrl: 'https://picsum.photos/seed/predatorhelios/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core i9-14900HX', 'GPU: RTX 4080 12GB', 'Display: 18" QHD+ 250Hz', 'RAM: 32GB DDR5'],
      ru: ['Процессор: Intel Core i9-14900HX', 'Видеокарта: RTX 4080 12 ГБ', 'Дисплей: 18" QHD+ 250 Гц', 'ОЗУ: 32 ГБ DDR5']
    }
  },
  {
    id: 41,
    name: { en: 'LG Gram 17 (2024)', ru: 'LG Gram 17 (2024)' },
    price: 1699,
    description: {
      en: 'Ultra-lightweight 17" laptop at 1.35kg with Intel Core Ultra and all-day battery.',
      ru: 'Ультралегкий 17" ноутбук 1.35 кг с Intel Core Ultra и батареей на весь день.'
    },
    imageUrl: 'https://picsum.photos/seed/lggram17/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core Ultra 7', 'Display: 17" 2560x1600 IPS', 'Weight: Only 1.35kg', 'Battery: 80Wh, up to 20 hours'],
      ru: ['Процессор: Intel Core Ultra 7', 'Дисплей: 17" 2560x1600 IPS', 'Вес: Всего 1.35 кг', 'Батарея: 80 Втч, до 20 часов']
    }
  },
  {
    id: 42,
    name: { en: 'MSI Titan 18 HX', ru: 'MSI Titan 18 HX' },
    price: 4999,
    originalPrice: 5499,
    description: {
      en: 'Desktop replacement beast with RTX 4090, Cherry MX keyboard, Mini-LED 4K display.',
      ru: 'Замена ПК с RTX 4090, клавиатурой Cherry MX, Mini-LED 4K дисплеем.'
    },
    imageUrl: 'https://picsum.photos/seed/msititan/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core i9-14900HX', 'GPU: RTX 4090 16GB', 'Display: 18" 4K 120Hz Mini-LED', 'Keyboard: Cherry MX mechanical'],
      ru: ['Процессор: Intel Core i9-14900HX', 'Видеокарта: RTX 4090 16 ГБ', 'Дисплей: 18" 4K 120 Гц Mini-LED', 'Клавиатура: Cherry MX механическая']
    }
  },
  {
    id: 43,
    name: { en: 'Framework Laptop 16', ru: 'Framework Laptop 16' },
    price: 1899,
    description: {
      en: 'Modular upgradeable laptop with swappable GPU, ports, and components.',
      ru: 'Модульный обновляемый ноутбук с заменяемым GPU, портами и компонентами.'
    },
    imageUrl: 'https://picsum.photos/seed/framework16/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: AMD Ryzen 7 7840HS', 'GPU: Upgradeable (Radeon RX 7700S)', 'Display: 16" 2560x1600 165Hz', 'Modularity: Swappable everything'],
      ru: ['Процессор: AMD Ryzen 7 7840HS', 'Видеокарта: Обновляемая (Radeon RX 7700S)', 'Дисплей: 16" 2560x1600 165 Гц', 'Модульность: Всё заменяемое']
    }
  },
  {
    id: 44,
    name: { en: 'Gigabyte Aero 16 OLED', ru: 'Gigabyte Aero 16 OLED' },
    price: 2299,
    description: {
      en: 'Creator laptop with 4K OLED, RTX 4070, color-accurate display for professionals.',
      ru: 'Ноутбук для создателей с 4K OLED, RTX 4070, точной цветопередачей для профессионалов.'
    },
    imageUrl: 'https://picsum.photos/seed/aero16/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core i9-13900H', 'GPU: RTX 4070 8GB', 'Display: 16" 4K OLED 100% DCI-P3', 'RAM: 32GB DDR5'],
      ru: ['Процессор: Intel Core i9-13900H', 'Видеокарта: RTX 4070 8 ГБ', 'Дисплей: 16" 4K OLED 100% DCI-P3', 'ОЗУ: 32 ГБ DDR5']
    }
  },
  {
    id: 45,
    name: { en: 'Lenovo Legion Pro 7i Gen 9', ru: 'Lenovo Legion Pro 7i 9-го поколения' },
    price: 2199,
    description: {
      en: 'Balanced gaming laptop with RTX 4080, QHD+ 240Hz display, Legion Coldfront 5.0.',
      ru: 'Сбалансированный игровой ноутбук с RTX 4080, QHD+ 240 Гц дисплеем, Legion Coldfront 5.0.'
    },
    imageUrl: 'https://picsum.photos/seed/legionpro7/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core i9-14900HX', 'GPU: RTX 4080 12GB', 'Display: 16" QHD+ 240Hz', 'Cooling: Legion Coldfront 5.0'],
      ru: ['Процессор: Intel Core i9-14900HX', 'Видеокарта: RTX 4080 12 ГБ', 'Дисплей: 16" QHD+ 240 Гц', 'Охлаждение: Legion Coldfront 5.0']
    }
  },
  {
    id: 46,
    name: { en: 'ASUS Zenbook Pro 14 OLED', ru: 'ASUS Zenbook Pro 14 OLED' },
    price: 1299,
    description: {
      en: 'Premium ultrabook with Intel Core Ultra, 3K OLED, ASUS Dial for creators.',
      ru: 'Премиальный ультрабук с Intel Core Ultra, 3K OLED, ASUS Dial для создателей.'
    },
    imageUrl: 'https://picsum.photos/seed/zenbookpro14/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core Ultra 9 185H', 'Display: 14.5" 3K OLED 120Hz', 'RAM: 32GB', 'Feature: ASUS Dial control'],
      ru: ['Процессор: Intel Core Ultra 9 185H', 'Дисплей: 14.5" 3K OLED 120 Гц', 'ОЗУ: 32 ГБ', 'Особенность: Управление ASUS Dial']
    }
  },
  {
    id: 47,
    name: { en: 'HP Omen Transcend 16', ru: 'HP Omen Transcend 16' },
    price: 1999,
    description: {
      en: 'Sleek gaming laptop with RTX 4070, stunning display, thin and light design.',
      ru: 'Элегантный игровой ноутбук с RTX 4070, потрясающим дисплеем, тонким и легким дизайном.'
    },
    imageUrl: 'https://picsum.photos/seed/omentranscend/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core Ultra 7 155H', 'GPU: RTX 4070 8GB', 'Display: 16" 2560x1600 240Hz', 'Weight: 2.17kg'],
      ru: ['Процессор: Intel Core Ultra 7 155H', 'Видеокарта: RTX 4070 8 ГБ', 'Дисплей: 16" 2560x1600 240 Гц', 'Вес: 2.17 кг']
    }
  },
  {
    id: 48,
    name: { en: 'Alienware m18 R2', ru: 'Alienware m18 R2' },
    price: 3499,
    description: {
      en: 'Massive gaming beast with 18" QHD+ display, RTX 4090, Cherry MX keys.',
      ru: 'Массивный игровой зверь с 18" QHD+ дисплеем, RTX 4090, клавишами Cherry MX.'
    },
    imageUrl: 'https://picsum.photos/seed/alienware18/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core i9-14900HX', 'GPU: RTX 4090 16GB', 'Display: 18" QHD+ 165Hz', 'Keyboard: Cherry MX Ultra Low Profile'],
      ru: ['Процессор: Intel Core i9-14900HX', 'Видеокарта: RTX 4090 16 ГБ', 'Дисплей: 18" QHD+ 165 Гц', 'Клавиатура: Cherry MX Ultra Low Profile']
    }
  },
  {
    id: 49,
    name: { en: 'Samsung Galaxy Book4 Ultra', ru: 'Samsung Galaxy Book4 Ultra' },
    price: 2399,
    description: {
      en: 'Premium creator laptop with Dynamic AMOLED 2X, RTX 4070, S Pen support.',
      ru: 'Премиальный ноутбук для создателей с Dynamic AMOLED 2X, RTX 4070, поддержкой S Pen.'
    },
    imageUrl: 'https://picsum.photos/seed/galaxybook4/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core Ultra 9 185H', 'GPU: RTX 4070 8GB', 'Display: 16" Dynamic AMOLED 2X 120Hz', 'S Pen: Included'],
      ru: ['Процессор: Intel Core Ultra 9 185H', 'Видеокарта: RTX 4070 8 ГБ', 'Дисплей: 16" Dynamic AMOLED 2X 120 Гц', 'S Pen: В комплекте']
    }
  },
  {
    id: 50,
    name: { en: 'Acer Swift Go 14 OLED', ru: 'Acer Swift Go 14 OLED' },
    price: 899,
    originalPrice: 999,
    description: {
      en: 'Affordable OLED laptop with Intel Core Ultra, great battery life, lightweight.',
      ru: 'Доступный OLED ноутбук с Intel Core Ultra, отличной батареей, легкий.'
    },
    imageUrl: 'https://picsum.photos/seed/swiftgo14/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Processor: Intel Core Ultra 7 155H', 'Display: 14" 2.8K OLED', 'RAM: 16GB LPDDR5x', 'Battery: Up to 12 hours'],
      ru: ['Процессор: Intel Core Ultra 7 155H', 'Дисплей: 14" 2.8K OLED', 'ОЗУ: 16 ГБ LPDDR5x', 'Батарея: До 12 часов']
    }
  },
  {
    id: 51,
    name: { en: 'Apple MacBook Air 15" M3', ru: 'Apple MacBook Air 15" M3' },
    price: 1499,
    description: {
      en: 'Thin and light 15" laptop with M3 chip, Liquid Retina display, silent operation.',
      ru: 'Тонкий и легкий 15" ноутбук с чипом M3, дисплеем Liquid Retina, бесшумной работой.'
    },
    imageUrl: 'https://picsum.photos/seed/air15m3/400/300',
    category: { en: 'Laptops', ru: 'Ноутбуки' },
    specs: {
      en: ['Chip: Apple M3 (8-core CPU)', 'Display: 15.3" Liquid Retina', 'RAM: 8GB unified memory', 'Battery: Up to 18 hours'],
      ru: ['Чип: Apple M3 (8-ядерный CPU)', 'Дисплей: 15.3" Liquid Retina', 'ОЗУ: 8 ГБ унифицированной памяти', 'Батарея: До 18 часов']
    }
  }
];
