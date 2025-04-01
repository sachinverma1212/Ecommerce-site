export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Welcome to Our Store
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Products Section */}
          <section className="bg-surface p-6 rounded-lg shadow-lg border border-border">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Featured Products
            </h2>
            <p className="text-text-secondary">
              Discover our handpicked selection of amazing products.
            </p>
          </section>

          {/* Special Offers Section */}
          <section className="bg-surface p-6 rounded-lg shadow-lg border border-border">
            <h2 className="text-2xl font-semibold text-accent mb-4">
              Special Offers
            </h2>
            <p className="text-text-secondary">
              Don't miss out on our exclusive deals and discounts.
            </p>
          </section>

          {/* New Arrivals Section */}
          <section className="bg-surface p-6 rounded-lg shadow-lg border border-border">
            <h2 className="text-2xl font-semibold text-info mb-4">
              New Arrivals
            </h2>
            <p className="text-text-secondary">
              Check out our latest products and trends.
            </p>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Start Shopping
          </button>
        </div>
      </div>
    </main>
  );
} 