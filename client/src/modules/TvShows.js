import React, { useState, useEffect } from "react";

import { useApp } from "../contexts/useApp";

import callApi from "../api/callApi";

import ContentCard from "../components/ContentCard";
import { CONTENT_CATEGORIES } from "../constants";
import { getDisplayList, normalCase } from "../utilities/helper";

const TvShows = (props) => {
  const { setLoading } = useApp();
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchMediaContent = async () => {
      try {
        const response = await callApi({
          url: "/tv-shows",
          method: "GET",
          params: {
            type: "tv_show",
          },
        });
        setTvShows(response?.data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch data from DB!\n Error:", error);
        setLoading(false);
      }
    };
    fetchMediaContent();
  }, []);

  let mediaContent = tvShows.length
    ? getDisplayList("tv_show", "top_rated", tvShows)
    : [];

  return (
    <div className="content-section">
      {tvShows.length &&
        CONTENT_CATEGORIES.map((e) => {
          return (
            <ContentCard
              cardTitle={`${normalCase(e)} Shows`}
              mediaContent={tvShows}
              style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}
              options={{ showMoreOption: false }}
            />
          );
        })}
    </div>
  );
};

export default TvShows;
