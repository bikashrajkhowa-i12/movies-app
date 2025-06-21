import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoadingWrapper from "./components/LoadingWrapper";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import MyList from "./modules/MyList";
import TvSeries from "./modules/TvSeries";
import Movies from "./modules/Movies";
import PageNotFound from "./modules/PageNotFound";

const App = () => {
  return (
    <div className="parent-container">
      <Navbar />
      <LoadingWrapper />
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/my-list" element={<MyList />}></Route>
          <Route path="/tv-series" element={<TvSeries />}></Route>
          <Route path="/movies" element={<Movies />}></Route>

          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
