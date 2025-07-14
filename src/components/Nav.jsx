import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Nav = ({ setCurrentPage, currentPage }) => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setVisible(false); // Close sidebar when navigating
  };

  return (
    <div className="navbar">
      {/* Menu Icon */}
      <img
        onClick={() => setVisible(!visible)}
        src={assets.menu_icon}
        className="menu-img"
        alt="Menu Icon"
      />

      {/* Logo */}
      <Link to="/" onClick={() => handleNavClick("home")} className="logo-img">
        <img src={assets.logo} className="logo-img" alt="Brand Logo" />
      </Link>

      {/* Nav Links */}
      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${currentPage === "home" ? "active" : ""}`}
          onClick={() => handleNavClick("home")}
        >
          Home
        </Link>
        <Link
          to="/aboutus"
          className={`nav-link ${currentPage === "about" ? "active" : ""}`}
          onClick={() => handleNavClick("about")}
        >
          About Us
        </Link>
        <Link
          to="/collections"
          className={`nav-link ${
            currentPage === "collections" ? "active" : ""
          }`}
          onClick={() => handleNavClick("collections")}
        >
          Collections
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${currentPage === "contact" ? "active" : ""}`}
          onClick={() => handleNavClick("contact")}
        >
          Contact Us
        </Link>
      </div>

      {/* Right Icons */}
      <div className="icons">
        <div className="search-container" onClick={() => setShowSearch(true)}>
          <img
            src={assets.search_icon}
            className="search-img"
            alt="Search Icon"
          />
        </div>

        <div className="profile-container">
          <img
            src={assets.profile_icon}
            className="profile-img"
            alt="Profile Icon"
          />
          <div className="dropdown-menu">
            <p className="dropdown-item">My Profile</p>
            <p className="dropdown-item">Orders</p>
            <p className="dropdown-item">Logout</p>
          </div>
        </div>

        <div className="cart-container">
          <img src={assets.cart_icon} className="cart-img" alt="Cart Icon" />
          <p className="cart-text">2</p>
        </div>
      </div>

      {/* Sidebar Menu (Mobile) */}
      {visible && (
        <div className="sidebar">
          <div className="sidebar-header">
            <p>Menu</p>
            <button onClick={() => setVisible(false)} className="close-btn">
              ×
            </button>
          </div>
          <div className="sidebar-links">
            <Link
              to="/profile"
              className={`nav-link ${
                currentPage === "profile" ? "active" : ""
              }`}
              onClick={() => handleNavClick("profile")}
            >
              My Profile
            </Link>
            <Link
              to="/aboutus"
              className={`nav-link ${currentPage === "about" ? "active" : ""}`}
              onClick={() => handleNavClick("about")}
            >
              About Us
            </Link>
            <Link
              to="/collections"
              className={`nav-link ${
                currentPage === "collections" ? "active" : ""
              }`}
              onClick={() => handleNavClick("collections")}
            >
              Collections
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                currentPage === "contact" ? "active" : ""
              }`}
              onClick={() => handleNavClick("contact")}
            >
              Help
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
