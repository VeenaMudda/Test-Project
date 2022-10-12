import React from "react";
//import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Route, Routes } from "react-router-dom";
import Data from "./data";

import Test from "./test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}
export default App;
