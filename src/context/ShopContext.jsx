import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryfee = 4;
  const [search, setSearch] = useState(""); // stores search input
  const [showSearch, setShowSearch] = useState(false); // controls search visibility

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const value = {
    products,
    currency,
    deliveryfee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    filteredProducts,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
