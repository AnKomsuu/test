import { User, Review, Order, OrderHistory } from '../types';
import { mockUsers } from '../data/mockUsers';
import { mockReviews } from '../data/mockReviews';
import { mockOrders } from '../data/mockOrders';

interface MockDatabase {
  users: User[];
  reviews: Review[];
  orders: Order[];
  version?: number;
}

export const MOCK_DB_KEY = 'mockDB';
const CURRENT_DB_VERSION = 1;

export const getMockDatabase = (): MockDatabase => {
  const dbJSON = localStorage.getItem(MOCK_DB_KEY);
  
  if (dbJSON) {
    const db = JSON.parse(dbJSON);
    
    // Check if database has the correct structure and version
    if (db.version === CURRENT_DB_VERSION && db.reviews && db.orders) {
      return db;
    }
    
    // If old version or missing data, re-initialize
    console.log('Reinitializing database with new version...');
  }
  
  const initialDB: MockDatabase = {
    users: [...mockUsers],
    reviews: [...mockReviews],
    orders: [...mockOrders],
    version: CURRENT_DB_VERSION,
  };
  
  saveMockDatabase(initialDB);
  return initialDB;
};

const saveMockDatabase = (db: MockDatabase): void => {
  localStorage.setItem(MOCK_DB_KEY, JSON.stringify(db));
};

// Helper function to "hash" password (simulation only)
const hashPassword = (password: string): string => {
  return password + '_hashed';
};

// Helper function to verify "hashed" password
const verifyPassword = (password: string, hashedPassword: string): boolean => {
  return hashPassword(password) === hashedPassword;
};

// Find user by email
export const findUserByEmail = (email: string): User | null => {
  const db = getMockDatabase();
  const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  return user || null;
};

// Find user by phone number
export const findUserByPhone = (phone: string): User | null => {
  const db = getMockDatabase();
  const user = db.users.find(u => u.phone === phone);
  return user || null;
};

// Create a new user in localStorage
export const createUser = (userData: {
  nickname: string;
  email: string;
  password: string;
  phone?: string;
}): User => {
  const db = getMockDatabase();
  
  const userId = `user_${Date.now()}`;
  const newUser: User = {
    id: userId,
    nickname: userData.nickname,
    email: userData.email,
    password: hashPassword(userData.password),
    phone: userData.phone,
    avatarUrl: `https://i.pravatar.cc/48?u=${userId}`,
  };

  db.users.push(newUser);
  saveMockDatabase(db);
  
  return newUser;
};

export const registerUser = (
  nickname: string,
  email: string,
  password: string,
  phone?: string
): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = findUserByEmail(email);
      if (existingUser) {
        reject(new Error('User with this email already exists.'));
        return;
      }

      if (phone) {
        const existingPhone = findUserByPhone(phone);
        if (existingPhone) {
          reject(new Error('User with this phone number already exists.'));
          return;
        }
      }

      const newUser = createUser({ nickname, email, password, phone });
      resolve(newUser);
    }, 1000);
  });
};

export const loginUser = (
  email: string,
  password: string
): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUserByEmail(email);
      
      if (!user || !verifyPassword(password, user.password)) {
        reject(new Error('Invalid email or password.'));
        return;
      }

      resolve(user);
    }, 1000);
  });
};

// Export for manual database re-initialization if needed
export const resetMockDatabase = (): void => {
  localStorage.removeItem(MOCK_DB_KEY);
  getMockDatabase(); // This will create a fresh database
  console.log('Mock database has been reset with fresh data.');
};

// ===== Order History Functions =====

const ORDER_HISTORY_KEY = 'order_history';

// Get all order history from localStorage
export const getAllOrderHistory = (): OrderHistory[] => {
  try {
    const ordersJSON = localStorage.getItem(ORDER_HISTORY_KEY);
    if (!ordersJSON) {
      return [];
    }
    return JSON.parse(ordersJSON);
  } catch (error) {
    console.error('Failed to load order history:', error);
    return [];
  }
};

// Save order history to localStorage
const saveOrderHistory = (orders: OrderHistory[]): void => {
  try {
    localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(orders));
  } catch (error) {
    console.error('Failed to save order history:', error);
  }
};

// Get orders for a specific user
export const fetchOrdersForUser = (userId: string): OrderHistory[] => {
  const allOrders = getAllOrderHistory();
  return allOrders.filter(order => order.userId === userId);
};

// Create and save a new order
export const createOrder = (orderData: Omit<OrderHistory, 'id'>): OrderHistory => {
  const allOrders = getAllOrderHistory();
  
  const newOrder: OrderHistory = {
    id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...orderData,
  };
  
  allOrders.push(newOrder);
  saveOrderHistory(allOrders);
  
  return newOrder;
};
