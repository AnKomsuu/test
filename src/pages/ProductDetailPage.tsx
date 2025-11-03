import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { products } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { fetchReviewsForProduct } from '../api/productsAPI';
import StarRating from '../components/StarRating';
import ReviewsList from '../components/reviews/ReviewsList';
import WishlistButton from '../components/ui/WishlistButton';

interface EnrichedReview {
  id: string;
  rating: number;
  text: string;
  createdAt: string;
  author: {
    nickname: string;
    avatarUrl?: string;
  };
}

function ProductDetailPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ru';
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { currentUser } = useAuth();
  const product = products.find(p => p.id === Number(id));
  const [reviews, setReviews] = useState<EnrichedReview[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  useEffect(() => {
    if (product) {
      setLoadingReviews(true);
      fetchReviewsForProduct(product.id)
        .then((data) => {
          setReviews(data);
        })
        .finally(() => {
          setLoadingReviews(false);
        });
    }
  }, [product]);

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  if (!product) {
    return (
      <div className="px-4 py-16 mx-auto max-w-7xl text-center">
        <h1 className="text-3xl font-bold text-gray-800">{t('product_not_found')}</h1>
        <p className="text-gray-600 mt-4">
          The product you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Левая колонка - Изображение */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name[lang]}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правая колонка - Информация о товаре */}
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              {product.name[lang]}
            </h1>
            {currentUser && (
              <WishlistButton productId={product.id} size="lg" />
            )}
          </div>
          
          {!loadingReviews && reviews.length > 0 && (
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={averageRating} size="md" />
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {averageRating.toFixed(1)} ({reviews.length} {reviews.length === 1 ? t('review') : t('reviews')})
              </span>
            </div>
          )}
          
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg leading-relaxed">
            {product.description[lang]}
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Technical Specifications:</h2>
            {product.specifications ? (
              <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specifications[lang].map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <ul className="space-y-2">
                {product.specs[lang].map((spec, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="mt-6">
            <p className="text-2xl font-semibold text-blue-600">
              ${product.price.toLocaleString()}
            </p>
          </div>
          
          <button 
            onClick={() => {
              if (!currentUser) {
                toast.error(
                  t('cart.login_required', 'Please log in to add items to your cart'),
                  { duration: 3000 }
                );
                navigate('/login');
                return;
              }
              addToCart(product);
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 font-semibold hover:bg-blue-700 transition-colors duration-200 w-full lg:w-auto"
          >
            {t('add_to_cart')}
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      {!loadingReviews && <ReviewsList reviews={reviews} />}
    </div>
  );
}

export default ProductDetailPage;
