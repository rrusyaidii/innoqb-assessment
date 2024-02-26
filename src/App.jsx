import React from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const url = "https://dummyjson.com/products";

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Header />
      {/* <Products /> */}
      <ProductCard />
    </main>
  );
};

export default App;
