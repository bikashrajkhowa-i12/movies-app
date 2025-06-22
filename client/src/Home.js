import { useState, useEffect } from "react";

import callApi from "./api/callApi";

import TrendingBanner from "./components/TrendingBanner";
import MovieCard from "./components/MovieCard";

import { useApp } from "./contexts/useApp";

const Home = (props) => {
  const { setLoading } = useApp();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await callApi({
          url: "/movies",
          method: "GET",
          params: {
            type: "movie",
          },
        });
        setMovies(response?.data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch movies!\n", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="content-section">
      <TrendingBanner movies={movies} />
      <MovieCard
        movies={movies}
        type="popular"
        style={{ display: "inline-flex", gap: "25px" }}
        options={{ showMoreOption: true, displayLimit: 7 }}
      />
    </div>
  );
};

export default Home;
