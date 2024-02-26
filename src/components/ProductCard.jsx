import React from "react";
import inno from "../assets/inno.png";

const ProductCard = ({ product, addCartItem }) => {
  // ... product details

  return (
    <div className="flash-container">
      <div className="title">
        <h2>Flash Deals</h2>
      </div>
      <div className="card">
        <div className="img-container">
          <img src={inno} alt="" />
        </div>
        <div className="card-text">
          <p>Sample 1</p>
          <p>RM99</p>
        </div>
        <div className="card-color-choice">
          {/* loop api data here */}
          <div className="card-prod-color"></div>
        </div>
        <button className="add-to-cart" onClick={() => {}}>
          <div className="text-add-to-cart">Add to Cart</div>
        </button>
      </div>
      <div className="card">
        <div className="img-container">
          <img src={inno} alt="" />
        </div>
        <div className="card-text">
          <p>
            <strong>Sample 1</strong>
          </p>
          <p>RM99</p>
        </div>
        <div className="card-color-choice">
          {/* loop api data here */}
          <div className="card-prod-color"></div>
        </div>
        <button className="add-to-cart" onClick={() => {}}>
          <div className="text-add-to-cart">Add to Cart</div>
        </button>
      </div>
      <div className="card">
        <div className="img-container">
          <img src={inno} alt="" />
        </div>
        <div className="card-text">
          <p>
            <strong>Sample 1</strong>
          </p>
          <p>RM99</p>
        </div>
        <div className="card-color-choice">
          {/* loop api data here */}
          <div className="card-prod-color"></div>
        </div>
        <button className="add-to-cart" onClick={() => {}}>
          <div className="text-add-to-cart">Add to Cart</div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
