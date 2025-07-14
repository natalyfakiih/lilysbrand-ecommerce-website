import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./style.css";
import ShopContextProvider from "./context/ShopContext.jsx";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import ContactUs from "./pages/ContactUs";
import AllProducts from "./components/AllProducts";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "collections", element: <Collections /> },
      { path: "aboutus", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "product/:productId", element: <AllProducts /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <RouterProvider router={router} />
  </ShopContextProvider>
);
