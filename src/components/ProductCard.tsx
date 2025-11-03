import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { Product } from '../types';
import WishlistButton from './ui/WishlistButton';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ru';
  const { currentUser } = useAuth();

  return (
    <Link 
      to={`/product/${product.id}`}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl block relative"
    >
      {currentUser && (
        <div className="absolute top-3 right-3 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
          <WishlistButton productId={product.id} size="sm" />
        </div>
      )}
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={product.imageUrl} 
          alt={product.name[lang]}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
          {product.name[lang]}
        </h3>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <del className="text-gray-500 dark:text-gray-400 text-lg">
              ${product.originalPrice.toLocaleString()}
            </del>
          )}
          <p className={`text-2xl font-bold ${product.originalPrice ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
            ${product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
