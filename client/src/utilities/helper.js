import { get, isEmpty, startCase, lowerCase } from "lodash";

import {
  CONTENT_TYPES,
  CONTENT_CATEGORIES,
  CONTENT_CONFIGS,
  tmdbImageBaseUrl,
  imgNotFoundUrl,
} from "../constants";

export const normalCase = (str) => startCase(lowerCase(str));

// TODO: make getDisplayList() as a backend api

export const getDisplayList = (
  contentType = "",
  contentCategory = "",
  mediaContent = []
) => {
  if (
    !CONTENT_TYPES.includes(contentType) ||
    !CONTENT_CATEGORIES.includes(contentCategory)
  )
    return [];

  const config = CONTENT_CONFIGS[contentType]?.[contentCategory];

  const displayList = mediaContent.filter((e) => {
    return (
      get(e, "type", "") === contentType &&
      get(e, config.searchKey, 0) >= config.threshold
    );
  });
  return displayList.sort(
    (a, b) =>
      Number(get(b, config.searchKey, 0)) - Number(get(a, config.searchKey, 0))
  );
};

export const getImgSrc = (movie) => {
  const imgSrc = !isEmpty(`${get(movie, "poster_path", "")}`)
    ? `${tmdbImageBaseUrl}/${get(movie, "poster_path", "")}`
    : `${imgNotFoundUrl}`;
  return imgSrc;
};
