import React, { useState, useEffect } from "react";

import { useApp } from "../contexts/useApp";

import callApi from "../api/callApi";

import ContentCard from "../components/ContentCard";
import { CONTENT_CATEGORIES } from "../constants";
import { normalCase, getDisplayList } from "../utilities/helper";

const Movies = (props) => {
  const { setLoading } = useApp();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMediaContent = async () => {
      try {
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
        console.log("Failed to fetch data from DB!\n Error:", error);
        setLoading(false);
      }
    };
    fetchMediaContent();
  }, []);

  let mediaContent = movies.length
    ? getDisplayList("movie", "popular", movies)
    : [];

  
  return (
    <div className="content-section">
      {movies.length &&
        CONTENT_CATEGORIES.map((e) => {
          return (
            <ContentCard
              cardTitle={`${normalCase(e)} Movies`}
              mediaContent={mediaContent}
              style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}
              options={{ showMoreOption: false }}
            />
          );
        })}
    </div>
  );
};

export default Movies;
