import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/lib/data';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, price, image, category, description: '', gender: 'men' }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link href={`/products/${id}`}>
        <div className="aspect-square relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{category}</p>
          <h3 className="font-semibold text-lg mb-2">{name}</h3>
          <p className="text-gray-900 font-medium">${price.toFixed(2)}</p>
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary w-full mt-4"
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
} 