import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductInfo;
