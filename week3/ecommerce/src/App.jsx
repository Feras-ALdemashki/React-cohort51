import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Error from "./components/Error";
import Favorite from "./pages/Favorite";
import { useState } from "react";
// i don't know why im getting an error here while everything is working fine
import { favoriteContext } from "./components/Cards";

function App() {
  const [favorite, setFavorite] = useState([]);

  const handleFavoriteClick = (id) => {
    setFavorite((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <favoriteContext.Provider value={{ favorite, handleFavoriteClick }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </favoriteContext.Provider>
  );
}

export default App;
