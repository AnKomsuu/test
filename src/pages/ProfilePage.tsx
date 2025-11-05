import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { fetchOrdersForUser } from '../api/userAPI';
import { fetchProducts } from '../api/productsAPI';
import { User, OrderHistory, Product } from '../types';

// Guest Profile View Component
function GuestProfileView() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto w-20 h-20 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {t('profile.access_restricted', 'Access Restricted')}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {t('profile.login_required', 'You must be logged in to view your profile.')}
        </p>
        
        <div className="space-y-3">
          <Link
            to="/login"
            className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('nav_login', 'Login')}
          </Link>
          
          <Link
            to="/"
            className="block w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {t('profile.go_home', 'Go to Homepage')}
          </Link>
        </div>
      </div>
    </div>
  );
}

// User Profile Component
function UserProfile({ user }: { user: User }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ru';
  const { cartItems } = useCart();
  const { wishlistIds } = useWishlist();
  const [orders, setOrders] = useState<OrderHistory[]>([]);
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  // Load user orders
  useEffect(() => {
    const userOrders = fetchOrdersForUser(user.id);
    setOrders(userOrders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  }, [user.id]);

  // Load wishlist products
  useEffect(() => {
    if (wishlistIds.length > 0) {
      fetchProducts().then(allProducts => {
        const favorites = allProducts.filter(p => wishlistIds.includes(p.id));
        setWishlistProducts(favorites);
      });
    } else {
      setWishlistProducts([]);
    }
  }, [wishlistIds]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        {t('profile.title', 'My Profile')}
      </h1>

      {/* Primary Information Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          {t('profile.primary_info', 'Primary Information')}
        </h2>
        
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.nickname}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="flex-grow space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t('profile.nickname', 'Nickname')}
              </label>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {user.nickname}
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t('profile.email', 'Email')}
              </label>
              <p className="text-lg text-gray-800 dark:text-gray-100 break-all">
                {user.email}
              </p>
            </div>

            {user.dateOfBirth && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {t('profile.date_of_birth', 'Date of Birth')}
                </label>
                <p className="text-lg text-gray-800 dark:text-gray-100">
                  {formatDate(user.dateOfBirth)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          {t('profile.activity', 'Activity')}
        </h2>

        <Link
          to="/cart"
          className="block bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-lg p-4 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  {t('profile.items_in_cart', 'Items in Cart')}
                </p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </p>
              </div>
            </div>
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Favorite Items Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {t('profile.favorite_items', 'Favorite Items')}
          </h2>
          {wishlistProducts.length > 3 && (
            <Link
              to="/wishlist"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {t('profile.view_all', 'View All')} ({wishlistProducts.length})
            </Link>
          )}
        </div>

        {wishlistProducts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            {t('profile.no_favorites', 'No favorite items yet.')}
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {wishlistProducts.slice(0, 4).map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 mb-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-2">
                  {product.name[lang]}
                </p>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  ${product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Order History Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          {t('profile.order_history', 'Order History')}
        </h2>

        {orders.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            {t('profile.no_orders', 'No orders yet.')}
          </p>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div
                key={order.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleOrderExpansion(order.id)}
                  className="w-full bg-gray-50 dark:bg-gray-700/50 p-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <p className="font-semibold text-gray-800 dark:text-gray-100">
                        {t('profile.order', 'Order')} #{order.id.slice(-8)}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(order.date)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-lg text-blue-600 dark:text-blue-400">
                      ${order.totalAmount.toLocaleString()}
                    </p>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedOrderId === order.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {expandedOrderId === order.id && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex-grow">
                            <p className="font-medium text-gray-800 dark:text-gray-100">
                              {item.productName}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {t('profile.quantity', 'Quantity')}: {item.quantity} × ${item.price}
                            </p>
                          </div>
                          <p className="font-semibold text-gray-800 dark:text-gray-100">
                            ${(item.quantity * item.price).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Main ProfilePage Component
function ProfilePage() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <GuestProfileView />;
  }

  return <UserProfile user={currentUser} />;
}

export default ProfilePage;
