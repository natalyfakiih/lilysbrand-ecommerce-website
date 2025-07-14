import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Product from "../components/Product";

const Collections = () => {
  const { products } = useContext(ShopContext);

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  // Sorting state
  const [sortOption, setSortOption] = useState("");

  // Dropdown toggles
  const [dropdownOpen, setDropdownOpen] = useState({
    category: false,
    subCategory: false,
    sort: false,
  });

  // Filtered products state
  const [filterProducts, setFilterProducts] = useState(products);

  // Your categories and subcategories arrays
  const category = [" Women ", " Men ", " Kids "];
  const subCategory = [" Topwear ", " Bottomwear ", " Winterwear "];

  // Effect to filter & sort products whenever filters or sort option changes
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by sub-category
    if (selectedSubCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedSubCategories.includes(product.subCategory)
      );
    }

    // Sorting logic
    if (sortOption === "priceLowHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOption === "alphabeticalAZ") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "alphabeticalZA") {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "newest") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
      );
    }

    setFilterProducts(filtered);
  }, [selectedCategories, selectedSubCategories, sortOption, products]);

  return (
    <div className="collections-container">
      <Title text1={"All"} text2={"Products"} />

      {/* Filter Section */}
      <div className="filter-container">
        <p>Filter:</p>

        {/* Category Filter */}
        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() =>
              setDropdownOpen((prev) => ({
                ...prev,
                category: !prev.category,
              }))
            }
          >
            Category ▾
          </button>
          {dropdownOpen.category && (
            <div className="dropdown-content">
              <button
                className="reset-button"
                onClick={() => setSelectedCategories([])}
              >
                Reset
              </button>
              {category.map((cat) => (
                <label key={cat}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() =>
                      setSelectedCategories((prev) =>
                        prev.includes(cat)
                          ? prev.filter((c) => c !== cat)
                          : [...prev, cat]
                      )
                    }
                  />
                  {cat}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sub-Category Filter */}
        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() =>
              setDropdownOpen((prev) => ({
                ...prev,
                subCategory: !prev.subCategory,
              }))
            }
          >
            Sub-Category ▾
          </button>
          {dropdownOpen.subCategory && (
            <div className="dropdown-content">
              <button
                className="reset-button"
                onClick={() => setSelectedSubCategories([])}
              >
                Reset
              </button>
              {subCategory.map((subCat) => (
                <label key={subCat}>
                  <input
                    type="checkbox"
                    checked={selectedSubCategories.includes(subCat)}
                    onChange={() =>
                      setSelectedSubCategories((prev) =>
                        prev.includes(subCat)
                          ? prev.filter((c) => c !== subCat)
                          : [...prev, subCat]
                      )
                    }
                  />
                  {subCat}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sorting Options */}
        <div className="dropdown sort-dropdown">
          <button
            className="dropdown-button"
            onClick={() =>
              setDropdownOpen((prev) => ({
                ...prev,
                sort: !prev.sort,
              }))
            }
          >
            Sort By ▾
          </button>
          {dropdownOpen.sort && (
            <div className="dropdown-content">
              <button onClick={() => setSortOption("priceLowHigh")}>
                Price: Low to High
              </button>
              <button onClick={() => setSortOption("priceHighLow")}>
                Price: High to Low
              </button>
              <button onClick={() => setSortOption("alphabeticalAZ")}>
                Alphabetical: A-Z
              </button>
              <button onClick={() => setSortOption("alphabeticalZA")}>
                Alphabetical: Z-A
              </button>
              <button onClick={() => setSortOption("newest")}>
                Newest Arrivals
              </button>
            </div>
          )}
        </div>

        <p className="products-number">{filterProducts.length} Products</p>
      </div>

      {/* Display Filtered & Sorted Products */}
      <div className="products-grid">
        {filterProducts.map((item) => (
          <Product
            key={item._id}
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

export default Collections;
