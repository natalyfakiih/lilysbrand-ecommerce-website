import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "./RelatedProducts";

const AllProducts = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) return <div>No product data available</div>;

  return (
    <div className="productData-container">
      <div className="productData-flex">
        <div className="productData-images">
          <div className="main-image">
            <img className="pmain-image" src={image} alt={productData.name} />
          </div>
          <div className="side-images">
            {productData.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt={`${productData.name} thumbnail ${index + 1}`}
                key={index}
                className={`p-image ${image === item ? "selected-image" : ""}`}
              />
            ))}
          </div>
        </div>
        <div className="productData-info">
          <h1 className="productData-title">{productData.name}</h1>
          <p className="productData-price">
            {currency}
            {productData.price}
          </p>

          <div className="productData-options">
            <p className="options-title">Size</p>
            <div className="options-container">
              {productData.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`options-btn ${size === item ? "selected" : ""}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="btns-container">
            <button className="btn-cart">add to cart</button>
            <button className="btn-buy">buy it now</button>
          </div>
          <p className="productData-description">{productData.description}</p>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default AllProducts;
