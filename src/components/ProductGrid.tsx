import React from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../data/products";

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
    return (
        <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-12 px-5">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

export default React.memo(ProductGrid);
