
export const CONTENT_TYPES = ["movie", "tv_show"]
export const CONTENT_CATEGORIES = ["trending", "popular", "top_rated"]

export const CONTENT_CONFIGS = {
  movie: {
    popular: { searchKey: "popularity", threshold: 100 },
    trending: { searchKey: "vote_average", threshold: 7 },
    top_rated: { searchKey: "vote_count", threshold: 500 },
  },
  tv_show: {
    popular: { searchKey: "popularity", threshold: 500 },
    trending: { searchKey: "vote_average", threshold: 8 },
    top_rated: { searchKey: "vote_count", threshold: 500 },
  }
};
