import React from "react";

import {
  getImgSrc,
  getFilteredMovies,
  getCssStyling,
} from "../utilities/helper";

const MovieCard = (props) => {
  const { movies = [], type = "", style = {}, options = {} } = props || {};
  const { showMoreOption = false, displayLimit = null } = options || {};

  let movieList = getFilteredMovies(type, movies) || [];

  if (movieList.length && showMoreOption && displayLimit) {
    movieList = movieList.slice(0, Number(displayLimit));
    movieList.push({ more: true });
  }

  return (
    <div className="movie-card-section">
      {movieList.length && <h3 className="movie-card-header">Popular Movies</h3>}
      {/* <div className="movie-card-layout"> */}
      <div style={getCssStyling(style)}>
        {movieList?.map((e, i) => {
          return (
            <div className="movie-card" key={i}>
              {e.more ? (
                <div className="more-card"></div>
              ) : (
                <img src={getImgSrc(e)} alt={e?.title} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
