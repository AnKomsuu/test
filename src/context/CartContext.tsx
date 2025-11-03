import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import toast from 'react-hot-toast';
import i18n from '../i18n';
import { t } from 'i18next';
import { Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateItemQuantity: (productId: number, newQuantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'shopping_cart';

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem(STORAGE_KEY);
      
      if (storedCart === null || storedCart === undefined) {
        return [];
      }
      
      const parsedCart = JSON.parse(storedCart);
      return parsedCart;
    } catch (error) {
      console.error('Failed to parse cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      const cartJSON = JSON.stringify(cartItems);
      localStorage.setItem(STORAGE_KEY, cartJSON);
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = (product: Product) => {
    const lang = i18n.language as 'en' | 'ru';
    const toastId = `cart-item-${product.id}`;

    toast.success(
      (toastObj) => (
        <div className="flex items-center justify-between w-full">
          <span className="mr-4">
            ✅ {t('toast_added_to_cart', { productName: product.name[lang] })}
          </span>
          <button
            onClick={() => toast.dismiss(toastObj.id)}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            ✕
          </button>
        </div>
      ),
      {
        id: toastId,
        duration: 2000,
      }
    );

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.product.id === productId);
      
      if (itemToRemove) {
        const lang = i18n.language as 'en' | 'ru';
        const toastId = `remove-cart-item-${productId}`;
        toast.error(
          (toastObj) => (
            <div className="flex items-center justify-between w-full">
              <span className="mr-4">
                🗑️ {t('toast_removed_from_cart', { productName: itemToRemove.product.name[lang] })}
              </span>
              <button
                onClick={() => toast.dismiss(toastObj.id)}
                className="p-1 rounded-full hover:bg-gray-200"
              >
                ✕
              </button>
            </div>
          ),
          { id: toastId, duration: 2000 }
        );
      }
      
      return prevItems.filter(item => item.product.id !== productId);
    });
  };

  const updateItemQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );

    const itemToUpdate = cartItems.find(item => item.product.id === productId);
    if (itemToUpdate) {
      const lang = i18n.language as 'en' | 'ru';
      const toastId = `update-quantity-${productId}`;
      toast.success(
        (toastObj) => (
          <div className="flex items-center justify-between w-full">
            <span className="mr-4">
              🔄 {t('toast_quantity_updated', { 
                productName: itemToUpdate.product.name[lang],
                quantity: newQuantity 
              })}
            </span>
            <button
              onClick={() => toast.dismiss(toastObj.id)}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        ),
        { id: toastId, duration: 1500 }
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
