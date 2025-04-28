import { useState } from "react";
import React from "react";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import FavoriteButton from "../components/FavoriteButton";
import ProductsButton from "../components/ProductsButton";
import { Link } from "react-router-dom";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
      <Buttons
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="right-btn">
        {" "}
        <Link to={"/favorite"}>
          <FavoriteButton />
        </Link>
        <Link to="/">
          <ProductsButton />
        </Link>
      </div>

      <div>
        <Cards selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default Categories;
