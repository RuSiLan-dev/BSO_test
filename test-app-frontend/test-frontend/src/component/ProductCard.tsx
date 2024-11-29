import React from 'react';
import '../styles/ProductCatalog.css';

const ProductCard = ({ product, onAddToCart }: { product: any; onAddToCart: (id: number) => void }) => (
  <div className="product-card">
    {/* <img src={product.image.url} alt={product.title} /> */}
    <h3>{product.Title}</h3>
    <p>Price: ${product.Price}</p>
    <button onClick={() => onAddToCart(product.ID)}>Add to Cart</button>
  </div>
);

export default ProductCard;
