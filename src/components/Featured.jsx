import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Product from "./Product";

const Featured = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setbestSeller(bestProduct.slice(0, 4));
  }, [products]);

  return (
    <div className="new-drops-container">
      <Title text1={"Top"} text2={"Sellers"} />
      <div className="products-grid">
        {bestSeller.map((item, index) => (
          <Product
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
