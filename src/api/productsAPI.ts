import { products as mockProducts } from '../data/mockProducts';
import { Product, Review } from '../types';
import { MOCK_DB_KEY } from './userAPI';

interface EnrichedReview extends Review {
  author: {
    nickname: string;
    avatarUrl?: string;
  };
}

export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {

      resolve(mockProducts);
    }, 1500); 
  });
}

export async function fetchReviewsForProduct(productId: number): Promise<EnrichedReview[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dbJSON = localStorage.getItem(MOCK_DB_KEY);
      if (!dbJSON) {
        resolve([]);
        return;
      }

      const db = JSON.parse(dbJSON);
      const productReviews = db.reviews.filter((review: Review) => review.productId === productId);

      const enrichedReviews: EnrichedReview[] = productReviews.map((review: Review) => {
        const user = db.users.find((u: any) => u.id === review.userId);
        return {
          ...review,
          author: {
            nickname: user?.nickname || 'Anonymous',
            avatarUrl: user?.avatarUrl,
          },
        };
      });

      resolve(enrichedReviews);
    }, 300);
  });
}