import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../containers/Home";

export const Index = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};
