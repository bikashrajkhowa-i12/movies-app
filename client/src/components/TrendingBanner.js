import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { getImgSrc, getDisplayList } from "../utilities/helper";

const TrendingBanner = (props) => {
  const [index, setIndex] = useState(0);

  const { contentType = "", contentCategory = "", mediaContent = [] } = props;
  const trendingList = getDisplayList(contentType, contentCategory, mediaContent)?.slice(0, 6) || [];
  
  const next = () => {
    setIndex((index + 1) % trendingList.length);
  };
  const prev = () => {
    setIndex((index - 1 + trendingList.length) % trendingList.length);
  };

  const poster = trendingList[index];
  const imgSrc = getImgSrc(poster);

  return (
    <div className="poster">
      <div className="poster-image-wrapper">
        <img src={imgSrc} className="poster-image" />
      </div>
      <div className="poster-overlay"></div>
      <div className="poster-content">
        <h2 className="poster-title">
          {poster?.title || poster?.name || "Unknown title!"}
        </h2>
        <p className="poster-overview">
          {poster?.overview || "Unknown overview!"}
        </p>
        <div className="poster-buttons">
          <button className="poster-info-button">ℹ More Info</button>
        </div>
      </div>
      <div className="poster-slide-indicator">
        {trendingList?.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
      <button className="nav-arrow left" onClick={prev}>
        <FaChevronLeft />
      </button>
      <button className="nav-arrow right" onClick={next}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default TrendingBanner;
