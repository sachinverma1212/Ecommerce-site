import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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
      </main>
    </>
  );
} 