import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { getImgSrc, getDisplayList } from "../utilities/helper";

const TrendingBanner = (props) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const { contentType = "", contentCategory = "", mediaContent = [] } = props;

  const trendingList =
    getDisplayList(contentType, contentCategory, mediaContent)?.slice(0, 6) ||
    [];

  const poster = trendingList[index];
  const imgSrc = getImgSrc(poster);

  useEffect(() => {
    start();
    return () => clear(); // cleanup on unmount
  }, [trendingList]); // reset if the array changes

  const start = () => {
    clear(); // prevent duplicate intervals
    if (trendingList.length === 0) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % trendingList.length);
    }, 5000);
  };

  const clear = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % trendingList.length);
    start();
  };
  const prev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + trendingList.length) % trendingList.length
    );
    start();
  };

  const onClickMore = (props) => {
    const { id = null, type = null } = props || {};
    if(id && type) navigate(`/${type}/${id}`);
  };

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
        <p className="poster-overview">{poster?.overview || ""}</p>
        <div className="poster-buttons">
          <button className="poster-info-button" onClick={() => onClickMore(poster)}>
            ℹ More Info
          </button>
        </div>
      </div>
      <div className="poster-slide-indicator">
        {trendingList?.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => {
              setIndex(i);
              start();
            }}
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
