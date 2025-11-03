import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ru';
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="px-4 py-16 mx-auto max-w-7xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t('shopping_cart_title')}</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">{t('cart_is_empty')}</p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          {t('continue_shopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">{t('shopping_cart_title')}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Список товаров в корзине */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div 
              key={item.product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Изображение товара */}
              <div className="w-full sm:w-48 h-48 bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                <img 
                  src={item.product.imageUrl} 
                  alt={item.product.name[lang]}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Информация о товаре */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <Link 
                      to={`/product/${item.product.id}`}
                      className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.product.name[lang]}
                    </Link>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors ml-4"
                      title="Remove from cart"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {t('cart.price')}: ${item.product.price.toLocaleString()}
                  </p>
                </div>
                
                <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{t('profile.quantity')} :</span>
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                      <button
                        onClick={() => updateItemQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 font-semibold text-gray-800 dark:text-gray-100 min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateItemQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Блок с итоговой информацией */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t('order_summary')}</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>{t('cart.items')} ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}):</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between text-lg font-bold text-gray-800 dark:text-gray-100">
                <span>{t('total_price')}:</span>
                <span className="text-blue-600 dark:text-blue-400">${totalPrice.toLocaleString()}</span>
              </div>
            </div>
            
            <Link
              to="/checkout"
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              {t('proceed_to_checkout')}
            </Link>
            
            <Link 
              to="/" 
              className="block text-center text-blue-600 hover:text-blue-700 mt-4 font-medium"
            >
              {t('continue_shopping')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
