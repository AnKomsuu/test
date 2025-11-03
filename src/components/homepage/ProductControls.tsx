import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductControlsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
}

function ProductControls({ setSearchQuery, sortOrder, setSortOrder }: ProductControlsProps) {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearchQuery]);

  return (
    <div className="flex justify-between items-center mb-6 gap-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={t('search_placeholder')}
        className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <option value="default">{t('sort_by')}: {t('sort_default')}</option>
        <option value="price-asc">{t('sort_price_asc')}</option>
        <option value="price-desc">{t('sort_price_desc')}</option>
      </select>
    </div>
  );
}

export default ProductControls;
