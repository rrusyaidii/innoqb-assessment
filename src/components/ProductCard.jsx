import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, discountPercentage, thumbnail } = product;

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>
          Price: ${price.toFixed(2)} (
          <span className="discount">-{discountPercentage}% off</span>)
        </p>
        {
          <button onClick={() => setCartCount(cartCount + 1)}>
            Add to Cart
          </button>
        }
      </div>
    </div>
  );
};

export default ProductCard;
