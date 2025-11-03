import { useTranslation } from 'react-i18next';
import ReviewItem from './ReviewItem';

interface Review {
  id: string;
  rating: number;
  text: string;
  createdAt: string;
  author: {
    nickname: string;
    avatarUrl?: string;
  };
}

interface ReviewsListProps {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {t('customer_reviews')}
      </h2>

      {reviews.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t('no_reviews_yet')}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewsList;
