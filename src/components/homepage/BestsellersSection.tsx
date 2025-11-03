import { Product } from '../../types';
import ProductCard from '../ProductCard';

interface BestsellersSectionProps {
  products: Product[];
}

function BestsellersSection({ products }: BestsellersSectionProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 pb-4">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-80">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default BestsellersSection;
