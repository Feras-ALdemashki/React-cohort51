import { useState } from "react";
import React from "react";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";

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
      <div>
        <Cards selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default Categories;
