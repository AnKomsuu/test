import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAuth } from './AuthContext';

export interface WishlistContextType {
  wishlistIds: number[];
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = 'user_wishlists';

interface WishlistStorage {
  wishlists: {
    [userId: string]: number[];
  };
}

interface WishlistProviderProps {
  children: ReactNode;
}

export function WishlistProvider({ children }: WishlistProviderProps) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);

  const getWishlistsStorage = (): WishlistStorage => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to parse wishlists from localStorage:', error);
    }
    return { wishlists: {} };
  };

  const saveWishlistsStorage = (storage: WishlistStorage) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    } catch (error) {
      console.error('Failed to save wishlists to localStorage:', error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      const storage = getWishlistsStorage();
      const userWishlist = storage.wishlists[currentUser.id] || [];
      setWishlistIds(userWishlist);
    } else {
      setWishlistIds([]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const storage = getWishlistsStorage();
      storage.wishlists[currentUser.id] = wishlistIds;
      saveWishlistsStorage(storage);
    }
  }, [wishlistIds, currentUser]);

  const addToWishlist = (productId: number) => {
    if (!currentUser) {
      toast.error(t('wishlist.login_required', 'Please log in to add favorites'), { duration: 2000 });
      return;
    }
    
    if (!wishlistIds.includes(productId)) {
      setWishlistIds((prev) => [...prev, productId]);
      toast.success(t('wishlist.added', '❤️ Added to favorites!'), { duration: 2000 });
    }
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistIds((prev) => prev.filter(id => id !== productId));
    toast.error(t('wishlist.removed', '💔 Removed from favorites'), { duration: 2000 });
  };

  const isInWishlist = (productId: number): boolean => {
    return wishlistIds.includes(productId);
  };

  const clearWishlist = () => {
    setWishlistIds([]);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlistIds, 
      addToWishlist, 
      removeFromWishlist, 
      isInWishlist,
      clearWishlist 
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
