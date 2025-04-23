import React from "react";
import useFetchData from "../utils/reusableHook";
import handleCategoryClick from "../utils/handleCategoryClick";

const Buttons = ({ selectedCategory, setSelectedCategory }) => {
  const {
    // just to rename the data variable to something relevant
    data: categories,
    loading,
    error,
  } = useFetchData("https://fakestoreapi.com/products/categories");

  if (loading) return <div>Loading categories...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      {categories.map((category, index) => (
        <button
          onClick={() => {
            handleCategoryClick(category, setSelectedCategory);
          }}
          className={`btn ${selectedCategory === category ? "btn-active" : ""}`}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
