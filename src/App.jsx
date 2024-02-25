import React from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";

const url = "https://dummyjson.com/products";

const App = () => {
  const [loading, setLoading] = React.useState(true);
  if (loading) {
    return <Header />;
  }
};

export default App;
