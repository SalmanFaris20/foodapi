import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipes from "./Recipes";
import Checkout from "./Checkout";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:id" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipes/:name" element={<Recipes />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default Pages;
