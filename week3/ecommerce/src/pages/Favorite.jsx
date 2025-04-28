import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProductsButton from "../components/ProductsButton";
import { favoriteContext } from "../components/Cards";

const Favorite = () => {
  const { favorite } = useContext(favoriteContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      setError(null);
      try {
        const responses = await Promise.all(
          favorite.map((id) =>
            fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
              res.json()
            )
          )
        );
        setProducts(responses);
      } catch (error) {
        setError("Failed to fetch favorite products");
      } finally {
        setLoading(false);
      }
    };

    if (favorite.length > 0) {
      fetchFavorites();
    } else {
      setProducts([]);
    }
  }, [favorite]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <p className="favorite">Favorite</p>
      <Link to={"/"}>
        <ProductsButton />
      </Link>
      <div>
        <h1>Favorite Products</h1>
        {products.length === 0 ? (
          <p>No favorites yet!</p>
        ) : (
          <div className="card-list">
            {products.map((card) => (
              <ul className="card" key={card.id}>
                <img
                  className="product-img"
                  src={card.image}
                  alt={card.title}
                />
                <Link to={`/products/${card.id}`}>
                  <p>{card.title}</p>
                </Link>
              </ul>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Favorite;
