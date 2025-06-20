import { useState, useEffect } from "react";

import callApi from "./api/callApi";

import LoadingWrapper from "./components/LoadingWrapper";
import Navbar from "./components/Navbar";
import TrendingBanner from "./components/TrendingBanner";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";

import movies from "./utilities/temp";

function Home() {
  const data = {
    movies: movies?.length ? movies : [],
  };

  return (
    <div className="parent-container">
      <Navbar {...data} />
      <div className="content-section">
        <LoadingWrapper />
        <TrendingBanner {...data} />
        <MovieCard 
          {...data} 
          type="popular" 
          style={{ display: "inline-flex", gap: "25px" }}
          options={{ showMoreOption: true, displayLimit: 7 }}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
