import React from "react";

const ProductCard = ({ product, addCartItem }) => {
  // ... product details

  return (
    <div className="flash-container">
      <div className="title">
        <h2>Flash Deals</h2>
      </div>
      <div className="card">
        <div className="product">{/* <img src="" alt="" /> */}</div>
        <div>
          {/* <h3>{product.name}</h3>
          <p>{product.price}</p> */}
        </div>
        <div>
          {/* <div>borderradius50%</div> */}
          <div></div>
          <div></div>
        </div>
        <button className="btn" onClick={() => addCartItem(product)}>
          <div>Add to Cart</div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
