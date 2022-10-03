import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../Components/Navigation";
const AppRouter = () => {

 
  return ( 
    <BrowserRouter>
      <div>
        <div className="main-content">
          <Routes>
            <Route element={<Navigation />} path="/home" />
            <Route path="*" element={<Navigation />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;