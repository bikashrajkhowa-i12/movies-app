import { get, isEmpty } from "lodash";

import { tmdbImageBaseUrl, imgNotFoundUrl, MOVIE_TYPES } from "./constants";

const camelToKebab = (str) =>
  str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

export const getCssStyling = (styleObj) => {
  let obj = {};
  Object.keys(styleObj).forEach((key) => {
    obj[camelToKebab(key)] = styleObj[key];
  });
  return obj;
};

export const getFilteredMovies = (type = "", movies = [] ) => {
  
  if (isEmpty(type)) return movies || [];

  const filteredList = movies?.filter(
    (e) =>
      Number(get(e, `${MOVIE_TYPES[type]?.searchKey}`, null)) >=
      Number(MOVIE_TYPES[type]?.minRate)
  );
  return filteredList
};

export const getImgSrc = (movie) => {
  const imgSrc = !isEmpty(`${get(movie, "poster_path", "")}`)
    ? `${tmdbImageBaseUrl}/${get(movie, "poster_path", "")}`
    : `${imgNotFoundUrl}`;
  return imgSrc;
};
