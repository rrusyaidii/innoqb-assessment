import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, updateCartCount }) => {
  return (
    <div className="container">
      <h1 className="title">flash deals</h1>
      <div className="flash-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              {...product}
              updateCartCount={updateCartCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
