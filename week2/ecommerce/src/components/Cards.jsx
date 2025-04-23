import React from "react";
import useFetchData from "../utils/reusableHook";
import { Link } from "react-router-dom";

const Cards = ({ selectedCategory }) => {
  //fetch all products if there is no selected categories
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products";
  // just  rename the data variable to something relevant
  const { data: products, loading, error } = useFetchData(url);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list">
      {products.map((card) => (
        <Link to={`/products/${card.id}`}>
          <ul className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <p>{card.title}</p>
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
