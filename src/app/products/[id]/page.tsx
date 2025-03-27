import Navbar from '@/components/Navbar';
import { products } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.category}</p>
            <p className="text-2xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <button className="btn btn-primary w-full md:w-auto px-8">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
} 