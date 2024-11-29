import React from 'react';
import { useGetProductsQuery } from '../api/apiSlice';
import ProductCard from '../component/ProductCard';
import '../styles/ProductCatalog.css';

const ProductCatalog = () => {
  const { data: products, error, isLoading } = useGetProductsQuery({});

  const handleAddToCart = (productId: number) => {
    console.log('Add to Cart:', productId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  // Ensure `products.data` is an array
  const productList = products?.data || []; // Default to an empty array if undefined

  return (
    <div className="product-catalog">
      {productList.length > 0 ? (
        productList.map((product: any) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default ProductCatalog;
