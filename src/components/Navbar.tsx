'use client';

import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/lib/cart-context';

export default function Navbar() {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Fashion Store
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/men" className="text-gray-600 hover:text-primary">
              Men
            </Link>
            <Link href="/women" className="text-gray-600 hover:text-primary">
              Women
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-primary">
              All Products
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-primary relative">
              <ShoppingBagIcon className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 