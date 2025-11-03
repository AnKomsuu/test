function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-24"></div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
