import { Review } from '../types';

export const mockReviews: Review[] = [
  {
    id: 'review_1',
    productId: 1,
    userId: 'user_1',
    rating: 5,
    text: 'Excellent smartphone! The camera quality is amazing and battery life is outstanding. Highly recommend!',
    createdAt: '2025-01-20T11:30:00.000Z',
  },
  {
    id: 'review_2',
    productId: 5,
    userId: 'user_1',
    rating: 4,
    text: 'Great laptop for the price. Runs smoothly for everyday tasks. Only wish it had more storage.',
    createdAt: '2025-01-22T15:45:00.000Z',
  },
  {
    id: 'review_3',
    productId: 3,
    userId: 'user_2',
    rating: 5,
    text: 'These headphones have incredible sound quality. Noise cancellation works perfectly!',
    createdAt: '2025-02-25T10:20:00.000Z',
  },
  {
    id: 'review_4',
    productId: 12,
    userId: 'user_2',
    rating: 3,
    text: 'Decent tablet but a bit overpriced. Works well for reading and browsing.',
    createdAt: '2025-02-28T14:00:00.000Z',
  },
  {
    id: 'review_5',
    productId: 5,
    userId: 'user_3',
    rating: 4,
    text: 'Solid performance and good build quality. Perfect for work and light gaming.',
    createdAt: '2025-03-15T09:30:00.000Z',
  },
  {
    id: 'review_6',
    productId: 8,
    userId: 'user_3',
    rating: 5,
    text: 'Best smartwatch I\'ve ever owned! Fitness tracking is accurate and battery lasts for days.',
    createdAt: '2025-03-18T16:45:00.000Z',
  },
];
