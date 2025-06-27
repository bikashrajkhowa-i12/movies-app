import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoadingWrapper from "./components/LoadingWrapper";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import MyList from "./modules/MyList";
import TvShows from "./modules/TvShows";
import Movies from "./modules/Movies";
import PageNotFound from "./modules/PageNotFound";
import DetailsPage from "./modules/DetailsPage";

const App = () => {
  return (
    <div className="parent-container">
      <div className="navbar-wrapper"><Navbar /></div>
      <div className="main-content">
        <LoadingWrapper />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/:type/:id" element={<DetailsPage />} />

          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
