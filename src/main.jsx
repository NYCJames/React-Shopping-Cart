import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Shop from "./pages/Shop.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import ShopContextProvider from "./context/ShopContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavBar></NavBar>}>
        <Route index element={<Shop></Shop>}></Route>
        <Route path="cart" element={<ShoppingCart></ShoppingCart>}></Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ShopContextProvider>
  </React.StrictMode>
);
