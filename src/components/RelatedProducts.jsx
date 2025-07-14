import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Product from "./Product";
import { useParams } from "react-router-dom"; // Import useParams to get the current product ID
import Title from "./Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams(); // get id of the opened product
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products
        .filter(
          (item) =>
            item.category === category &&
            item.subCategory === subCategory &&
            item._id !== productId // exclude the opened product
        )
        .slice(0, 4); //only 4 products
      setRelated(filteredProducts);
    }
  }, [products, category, subCategory, productId]);

  return (
    <div className="related-products">
      <Title text1={"Related"} text2={"Products"} />
      {related.length > 0 ? (
        <div className="related-list">
          {related.map((product) => (
            <Product
              key={product._id}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <p>No related products available.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
