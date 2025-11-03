import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import LanguageSwitcher from '../LanguageSwitcher';

function Header() {
  const { t } = useTranslation();
  const { cartItems } = useCart();
  const { currentUser, logout } = useAuth();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-800 shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors ${
              isScrolled 
                ? 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400' 
                : 'text-white hover:text-gray-300'
            }`}
          >
            ElectroShop
          </Link>
          <nav className="flex gap-4 items-center">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  : 'text-white hover:text-gray-300'
              }`}
            >
              {t('nav_home')}
            </Link>
            {currentUser && (
              <Link 
                to="/cart" 
                className={`transition-colors font-medium flex items-center gap-2 ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {t('nav_cart')}
                {totalItems > 0 && (
                  <span className="bg-blue-600 text-white text-sm font-bold rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            {currentUser ? (
              <>
                <Link 
                  to="/profile" 
                  className={`transition-colors font-medium flex items-center gap-2 ${
                    isScrolled
                      ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                    />
                  </svg>
                  {currentUser.nickname}
                </Link>
                <button
                  onClick={logout}
                  className={`transition-colors font-medium border rounded-md px-3 py-2 text-sm ${
                    isScrolled
                      ? 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                      : 'border-white text-white hover:bg-white/10'
                  }`}
                >
                  {t('nav_logout')}
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className={`transition-colors font-medium border rounded-md px-3 py-2 text-sm ${
                  isScrolled
                    ? 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'border-white text-white hover:bg-white/10'
                }`}
              >
                {t('nav_login')}
              </Link>
            )}
            <LanguageSwitcher isScrolled={isScrolled} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
