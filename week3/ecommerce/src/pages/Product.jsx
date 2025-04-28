import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../utils/reusableHook";
import ProductInfo from "../components/ProductInfo";
import ProductsButton from "../components/ProductsButton";
import FavoriteButton from "../components/FavoriteButton";

const Product = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetchData(`https://fakestoreapi.com/products/${id}`);
  if (loading) return <div>Loading product...</div>;

  if (error) return <div>{error}</div>;
  if (!product.id) return <p>404 product not found</p>;
  return (
    <>
      <Link to={"/"}>
        <ProductsButton />
      </Link>
      <Link to={"/favorite"}>
        <FavoriteButton />
      </Link>
      <ProductInfo product={product} />
    </>
  );
};

export default Product;
