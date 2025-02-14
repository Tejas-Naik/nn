import { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                <div className="mt-3">
                    <p className="text-sm text-gray-600">Available sizes:</p>
                    <div className="flex gap-2 mt-1">
                        {product.sizes.map((size) => (
                            <span key={size} className="px-2 py-1 text-sm border border-gray-300 rounded">
                                {size}
                            </span>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => onAddToCart(product)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
