import React from "react";
import {
  BrowserRouter ,
  Routes, Route
} from "react-router-dom";
import Ai_assistance from "./components/Ai_assistance";
import Home from "./components/Home"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ai_assistance' element={<Ai_assistance/>} />
    </Routes>
    </BrowserRouter>
  );
}
