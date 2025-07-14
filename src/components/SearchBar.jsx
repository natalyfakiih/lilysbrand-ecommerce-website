import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, filteredProducts } =
    useContext(ShopContext);

  return (
    showSearch && (
      <div className="searchbar-overlay" onClick={() => setShowSearch(false)}>
        <div
          className="searchbar-container"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchbar-input"
          />
          <button
            onClick={() => setShowSearch(false)}
            className="searchbar-btn"
          >
            ✖
          </button>
          {search && (
            <ul className="search-results">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <li key={product.id} className="search-result-item">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="search-result-img"
                    />
                    <span className="search-result-name">{product.name}</span>
                  </li>
                ))
              ) : (
                <li className="search-result-item">No products found</li>
              )}
            </ul>
          )}
        </div>
      </div>
    )
  );
};

export default SearchBar;
