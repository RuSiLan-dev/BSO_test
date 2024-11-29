import React from 'react';
import { useGetCartQuery, useRemoveFromCartMutation } from '../api/apiSlice';

const CartPage = () => {
  const { data: cart, isLoading, error } = useGetCartQuery({});
  const [removeFromCart] = useRemoveFromCartMutation();

  const handleRemove = (productId: number) => {
    removeFromCart(productId).catch((err) => console.error('Failed to remove product:', err));
  };

  if (isLoading) return <div>Loading cart...</div>;
  if (error) return <div>Error loading cart:::{localStorage.getItem('token')}</div>;

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart?.products.map((product: any) => (
        <div key={product.id} className="cart-item">
          <img src={product.image.url} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleRemove(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
