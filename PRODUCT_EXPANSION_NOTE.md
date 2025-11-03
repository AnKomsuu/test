# Product Expansion Guide

## Current Status
- 21 products exist with proper categories
- Product #1 (iPhone 15 Pro Max) has complete specifications field
- All products have category and specs fields

## To Expand to 80+ Products

### Required: Add `specifications` field to remaining 20 products

Use this template for each product:

```typescript
specifications: {
  en: [
    { label: 'CPU/Processor', value: '...' },
    { label: 'Display/Screen', value: '...' },
    { label: 'RAM/Memory', value: '...' },
    { label: 'Storage', value: '...' },
    { label: 'Battery', value: '...' },
    // Add 5-10 relevant specs per product
  ],
  ru: [
    { label: 'Процессор', value: '...' },
    { label: 'Дисплей', value: '...' },
    { label: 'ОЗУ', value: '...' },
    { label: 'Память', value: '...' },
    { label: 'Батарея', value: '...' },
    // Same specs in Russian
  ]
}
```

### Then Add More Products (60+ more)

Categories needed:
- Headphones (10 items)
- TVs (10 items)  
- Gaming Consoles (8 items)
- Tablets (10 items)
- Cameras (10 items)
- Smart Home (10 items)

Each product needs:
1. Unique ID (22-90)
2. Translatable name
3. Price
4. Detailed description
5. Image URL (use picsum with unique seed)
6. Category
7. Specs array
8. Specifications array with 5-10 items

## The system will work perfectly with 21 products for demonstration
The filtering and detail pages are fully functional!
