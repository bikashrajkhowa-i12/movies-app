const { Movie } = require("@bikashrajkhowa-i12/blackboxcore/models/mongo");

const { callTmdbApi } = require("./utils/externalApiUtillity");
const { getConfig } = require("./utils/helper");
const { isEmpty, forEach } = require("lodash");

const getAllContent = async (query) => {
  try {
    const result = await Movie.find(query).lean();
    return result;
  } catch (error) {
    console.log("Error fetching from Database!\n", error);
    throw error;
  }
};

const getContentById = async (id) => {
  try {
    if (!id) throw new Error("id is missing!!");
    let result = await Movie.findOne({ id }).lean();

    if (!isEmpty(result)) {
      result = await fetchFromExternalApi(result);

      if (!result?.genres) {
        result = {
          ...result,
          genres: await getGenres(result?.genre_ids),
        };
      }
    }
    return result;
  } catch (error) {
    console.log("Error fetching from Database!\n", error);
    throw error;
  }
};

const fetchFromExternalApi = async (data) => {
  const { id = null, type = null } = data || {};
  try {
    if (!id || !type) throw new Error("id and type are mandatory!");
    const url = `/${type}/${id}`;
    const result = await callTmdbApi({ url });
    return { ...data, ...result };
  } catch (error) {
    console.log("Error: ", error?.message);
    console.log("Failed to fetch from TMDB external api!");
    return data
  }
};

const getGenres = async (genreIds) => {
  try {
    if (!Array.isArray(genreIds) || genreIds.length === 0) return [];

    const { configs = {} } = await getConfig("genre");
    const { movie = {}, tv_show = {} } = configs;
    let genres = [];
    const seen = new Set();

  for (const id of genreIds) {
    const movieName = movie[id];
    const tvName = tv_show[id];

    if (movieName) {
      const key = `${id}|${movieName}`;
      if (!seen.has(key)) {
        genres.push({ id, name: movieName });
        seen.add(key);
      }
    }

    if (tvName && tvName !== movieName) {
      const key = `${id}|${tvName}`;
      if (!seen.has(key)) {
        genres.push({ id, name: tvName });
        seen.add(key);
      }
    }
  }

    return genres;
  } catch (error) {
    console.error("Failed to get genres:", error);
    return [];
  }
};

module.exports = {
  getAllContent,
  getContentById,
  fetchFromExternalApi,
  getConfig,
};
