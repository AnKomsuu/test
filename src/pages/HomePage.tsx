import { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useProducts } from '../hooks/useProducts';
import ProductControls from '../components/homepage/ProductControls';
import ProductGrid from '../components/homepage/ProductGrid';
import ProductGridSkeleton from '../components/homepage/ProductGridSkeleton';
import ErrorMessage from '../components/homepage/ErrorMessage';
import HeroSection from '../components/homepage/HeroSection';
import BestsellersSection from '../components/homepage/BestsellersSection';

function HomePage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ru';
  const [showAll, setShowAll] = useState(false);
  
  const {
    status,
    error,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    selectedCategory,
    setSelectedCategory,
    filteredAndSortedProducts,
    originalProducts,
  } = useProducts();

  // Reset showAll when filters change (category or search)
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory, searchQuery]);

  // Bestseller product IDs: 5, 10, 12, 17
  const bestsellerIds = [5, 10, 12, 17];
  const bestsellerProducts = filteredAndSortedProducts.filter(product => 
    bestsellerIds.includes(product.id)
  );

  // Get unique categories from original products (not filtered)
  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    originalProducts.forEach(product => {
      categoriesSet.add(product.category[lang]);
    });
    return Array.from(categoriesSet).sort();
  }, [originalProducts, lang]);

  if (status === 'loading') {
    return (
      <div>
        <HeroSection />
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">{t('bestsellers')}</h2>
          <ProductGridSkeleton />
          <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-800 dark:text-gray-100">{t('all_products')}</h2>
          <ProductGridSkeleton />
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return <ErrorMessage error={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div>
      <HeroSection />
      
      {/* Bestsellers Section */}
      <div className="px-4 py-12 mx-auto max-w-7xl bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">{t('bestsellers')}</h2>
        <BestsellersSection products={bestsellerProducts} />
      </div>

      {/* All Products Section */}
      <div id="all-products" className="px-4 py-12 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">{t('all_products')}</h2>
        
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {t('all_categories', 'All Categories')}
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <ProductControls
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <ProductGrid products={showAll ? filteredAndSortedProducts : filteredAndSortedProducts.slice(0, 20)} />
        
        {/* Show More Button */}
        {!showAll && filteredAndSortedProducts.length > 20 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('show_more', 'Show More')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
