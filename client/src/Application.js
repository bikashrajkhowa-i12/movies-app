import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { get, isEmpty } from "lodash";

import callApi from "./api/callApi";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import movies from "./sample/temp";
import { tmdbImageBaseUrl, imgNotFoundUrl } from "./sample/utils";

function TrendingBanner(data) {
  const [index, setIndex] = useState(0);

  const { movies = [] } = data;
  const trendingList = movies.length > 10 ? movies.slice(0, 8) : movies;

  const next = () => {
    setIndex((index + 1) % trendingList.length);
  };
  const prev = () => {
    setIndex((index - 1 + trendingList.length) % trendingList.length);
  };

  const poster = trendingList[index];
  const imgSrc = !isEmpty(`${get(poster, "poster_path")}`)
    ? `${tmdbImageBaseUrl}/${get(poster, "poster_path")}`
    : `${imgNotFoundUrl}`;

  return (
    <div className="poster">
      <img src={imgSrc} className="poster-image"/>
      <div className="poster-overlay"></div>
      <div className="poster-content">
        <h2 className="poster-title">{poster?.title || 'Unknown title!'}</h2>
        <p className="poster-overview">{poster?.overview || 'Unknown overview!'}</p>
        <div className="poster-buttons">
          <button className="poster-info-button">ℹ More Info</button>
        </div>
      </div>
      <button className="nav-arrow left" onClick={prev}><FaChevronLeft/></button>
      <button className="nav-arrow right" onClick={next}><FaChevronRight/></button>
    </div>
  );
}

function MovieRow() {
  return <></>;
}

function Application() {
  //const [movies=[], setMovies] = useState([]);
  // useEffect(() => {

  // }, [])

  return (
    <div>
      <Navbar movies={movies} />
      <TrendingBanner movies={movies.length ? movies : []} />
      <MovieRow title="Popular releases" />
      <Footer />
    </div>
  );
}

export default Application;
