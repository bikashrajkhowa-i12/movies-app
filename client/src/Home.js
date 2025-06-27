import { useState, useEffect } from "react";

import { useApp } from "./contexts/useApp";

import callApi from "./api/callApi";

import TrendingBanner from "./components/TrendingBanner";
import ContentCard from "./components/ContentCard";

const Home = (props) => {
  const { setLoading } = useApp();
  const [mediaContent, setMediaContent] = useState([]);

  useEffect(() => {
    const fetchMediaContent = async () => {
      try {
        setLoading(true);
        const response = await callApi({
          url: "/movies",
          method: "GET"
        });
        setMediaContent(response?.data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch movies!\n", error);
        setLoading(false);
      }
    };

    fetchMediaContent();
  }, [setLoading]);

  return (
    <div className="content-section">
      {mediaContent?.length && <TrendingBanner
        contentType="movie"
        contentCategory="trending"
        mediaContent={mediaContent}
       />}
      {mediaContent?.length && <ContentCard
        contentType="movie"
        contentCategory="popular"
        mediaContent={mediaContent}
        cardTitle="Popular Movies"
        style={{ display: "inline-flex", gap: "25px" }}
        options={{ showMoreOption: true, displayLimit: 7 }}
      />}
      {mediaContent?.length && <ContentCard
        contentType="tv_show"
        contentCategory="top_rated"
        mediaContent={mediaContent}
        cardTitle="Top-rated TV Shows"
        style={{ "display": "inline-flex", "gap": "25px" }}
        options={{ showMoreOption: true, displayLimit: 7 }}
      />}
    </div>
  );
};

export default Home;
