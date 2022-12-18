import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:index" element={<Detail />} />
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
