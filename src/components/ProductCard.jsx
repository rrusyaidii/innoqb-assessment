import React from "react";

const ProductCard = ({
  title,
  id,
  price,
  thumbnail,
  discountPercentage,
  images,
}) => {
  let discountedPrice = price - (price * discountPercentage) / 100;
  discountedPrice = discountedPrice.toFixed(2);

  return (
    <div className="flash-container">
      <div className="card">
        <div className="img-container">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="card-text">
          <p>
            (Product {id})Sample - Computers <br />& Accesories For Sale - Black
          </p>
          <p>
            <span className="original-price">${price} from</span>{" "}
            <span className="discounted-price"> ${discountedPrice}</span>
          </p>
        </div>
        <div className="card-color-choice">
          {/* loop api data here */}
          <div className="card-prod-color"></div>
          <div className="card-prod-color1"></div>
          <div className="card-prod-color2"></div>
        </div>
        <button className="add-to-cart" onClick={() => {}}>
          <div className="text-add-to-cart">Add to Cart</div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
