import React from 'react';
import type { Product } from '../types/index';

// Utility Type: Pick
type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

interface ProductListProps {
    products: Product[];
    onProductClick: (product: ProductSummary) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li
                        key={product.id}
                        onClick={() => onProductClick(product)}
                    >
                        <strong>{product.name}</strong> - ${product.price}
                        {!product.inStock && <span>Out of Stock</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};
