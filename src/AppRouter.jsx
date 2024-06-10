import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ItemDetailsPage from "./screens/ItemDetailsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ItemDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
