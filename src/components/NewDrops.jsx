import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Product from "./Product";

const NewDrops = () => {
  const { products } = useContext(ShopContext);
  const [newProducts, setnewProducts] = useState([]);
  useEffect(() => {
    setnewProducts(products.slice(0, 8));
  }, [products]);

  return (
    <div className="new-drops-container">
      <Title text1={"Newest"} text2={"Drops"} />
      <div className="products-grid">
        {newProducts.map((item, index) => (
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

export default NewDrops;
