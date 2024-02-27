import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Products from "./components/Products";

const url = "https://dummyjson.com/products";
const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [cartCount, setCartCount] = useState(0); // State for cart count

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json(); // Store the response in a variable named 'data'
      setLoading(false);
      setProducts(data.products); // Update state with 'data.products'
      console.log(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to update cart count
  const updateCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Header cartCount={cartCount} />
      <Products products={products} updateCartCount={updateCartCount} />
    </main>
  );
};

export default App;
