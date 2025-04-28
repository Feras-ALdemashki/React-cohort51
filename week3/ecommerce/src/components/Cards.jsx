import React, { useContext, createContext } from "react";
import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

import useFetchData from "../utils/reusableHook";
export const favoriteContext = createContext();
const Cards = ({ selectedCategory }) => {
  const { favorite, handleFavoriteClick } = useContext(favoriteContext);

  // Fetch all products if no selected category
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products";

  const { data: products, loading, error } = useFetchData(url);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list">
      {products.map((card) => (
        <ul className="card" key={card.id}>
          <img className="product-img" src={card.image} alt={card.title} />
          <Link to={`/products/${card.id}`}>
            <p>{card.title}</p>
          </Link>
          <img
            className="fav-icon"
            src={favorite.includes(card.id) ? heartSolid : heartRegular}
            alt="heart"
            onClick={() => handleFavoriteClick(card.id)}
          />
        </ul>
      ))}
    </div>
  );
};

export default Cards;
