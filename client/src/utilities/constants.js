export const tmdbImageBaseUrl = "https://image.tmdb.org/t/p/w500";
export const imgNotFoundUrl =
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

export const MOVIE_TYPES = {
  "trending": {
    searchKey: "vote_average",
    minRate: 7
  },
  "popular": {
    searchKey: "popularity",
    minRate: 250
  },
};
