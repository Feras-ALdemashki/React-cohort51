import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/reusableHook";
import ProductInfo from "../components/ProductInfo";

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
  return <ProductInfo product={product} />;
};

export default Product;
