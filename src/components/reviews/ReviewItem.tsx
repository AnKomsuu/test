import StarRating from '../StarRating';

interface ReviewItemProps {
  review: {
    id: string;
    rating: number;
    text: string;
    createdAt: string;
    author: {
      nickname: string;
      avatarUrl?: string;
    };
  };
}

function ReviewItem({ review }: ReviewItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-4">
        <img
          src={review.author.avatarUrl || 'https://i.pravatar.cc/48'}
          alt={review.author.nickname}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                {review.author.nickname}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(review.createdAt)}
              </p>
            </div>
            <StarRating rating={review.rating} size="sm" />
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {review.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
