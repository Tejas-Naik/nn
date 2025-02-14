import { useState } from 'react'
import { products, Product } from './data/products'
import ProductGrid from './components/ProductGrid'

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [category, setCategory] = useState<'all' | 'shirts' | 'shorts'>('all')

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category)

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-screen-2xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Men's Fashion Store</h1>
          <div className="mt-4 flex gap-4">
            <button 
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded ${category === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setCategory('shirts')}
              className={`px-4 py-2 rounded ${category === 'shirts' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Shirts
            </button>
            <button 
              onClick={() => setCategory('shorts')}
              className={`px-4 py-2 rounded ${category === 'shorts' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Shorts
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto py-8">
        <div className="flex justify-between items-center px-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            {category === 'all' ? 'All Products' : `${category.charAt(0).toUpperCase() + category.slice(1)}`}
          </h2>
          <div className="flex items-center">
            <span className="mr-2">Cart Items:</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
              {cartItems.length}
            </span>
          </div>
        </div>
        
        <ProductGrid 
          products={filteredProducts} 
          onAddToCart={handleAddToCart} 
        />
      </main>
    </div>
  )
}

export default App
