import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />{" "}
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
