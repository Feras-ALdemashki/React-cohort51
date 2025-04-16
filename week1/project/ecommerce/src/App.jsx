import { useState } from "react";
import "./App.css";
import data from "./fake-data/all-products";
import categories from "./fake-data/all-categories";
import { Header } from "./component/Header";
import { Cards } from "./component/cards";
import { Buttons } from "./component/button";
import { filterProducts } from "./functions/filterProducts";

function App() {
  const [Products, setProducts] = useState(data);

  const handleCategory = (category) => {
    const filtered = filterProducts(data, category);
    setProducts(filtered);
  };
  return (
    <>
      <Header />
      <Buttons categories={categories} onClick={handleCategory} />
      <Cards list={Products} />
    </>
  );
}

export default App;
