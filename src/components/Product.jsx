import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Product = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="card-link" to={`/product/${id}`}>
      <div className="card-container">
        <div className="image-container">
          <img className="card-image" src={image[0]} alt="" />
        </div>
        <div className="card-content">
          <h1 className="card-title">{name}</h1>
          <p className="card-price">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
