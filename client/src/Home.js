import { useState, useEffect } from "react";

import callApi from "./api/callApi";

import TrendingBanner from "./components/TrendingBanner";
import MovieCard from "./components/MovieCard";

import movies from "./utilities/temp";

const Home = () => {
  const data = {
    movies: movies?.length ? movies : [],
  };

  return (
    <div className="content-section">
      <TrendingBanner {...data} />
      <MovieCard
        {...data}
        type="popular"
        style={{ display: "inline-flex", gap: "25px" }}
        options={{ showMoreOption: true, displayLimit: 7 }}
      />
    </div>
  );
}

export default Home;
