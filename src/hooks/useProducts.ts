import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchProducts } from '../api/productsAPI';
import { Product } from '../types';

export function useProducts() {
  const { i18n } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setStatus('success');
      })
      .catch((err) => {
        console.error("useProducts hook поймал ошибку:", err); 
        setError(err.message);
        setStatus('error');
      });
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    const lang = i18n.language as 'en' | 'ru';
    
    // Step 1: Filter by category
    let result = products;
    if (selectedCategory) {
      result = result.filter((product) => 
        product.category[lang] === selectedCategory
      );
    }

    // Step 2: Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((product) => {
        const nameMatch = product.name[lang].toLowerCase().includes(query);
        const descriptionMatch = product.description[lang].toLowerCase().includes(query);
        return nameMatch || descriptionMatch;
      });
    }

    // Step 3: Sort
    return [...result].sort((a, b) => {
      if (sortOrder === 'price-asc') {
        return a.price - b.price;
      } else if (sortOrder === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });
  }, [products, selectedCategory, searchQuery, sortOrder, i18n.language]);

  return {
    status,
    error,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    selectedCategory,
    setSelectedCategory,
    filteredAndSortedProducts,
    originalProducts: products,
  };
}
