import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-fashion.jpg"
              alt="Fashion Store Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/60 z-10" />
          <div className="relative h-full flex items-center justify-center text-center text-white z-20">
            <div className="max-w-3xl px-4">
              <h1 className="text-5xl font-bold mb-6">Welcome to Fashion Store</h1>
              <p className="text-xl mb-8">Discover the latest trends in men's and women's fashion</p>
              <Link href="/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/men" className="group relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/men-category.jpg"
                  alt="Men's Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/50 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-3xl font-bold text-white">Men's Collection</h3>
                </div>
              </Link>
              <Link href="/women" className="group relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/women-category.jpg"
                  alt="Women's Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/50 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-3xl font-bold text-white">Women's Collection</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 