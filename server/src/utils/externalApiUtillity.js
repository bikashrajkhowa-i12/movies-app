const axios = require("axios");

const callTmdbApi = async (data) => {
  const { url = "", method = "GET" } = data || {};
  const tmdbApiUrl = `${process.env.TMDB_BASEURL}${url}`;

  const axiosConfig = {
    method: method || "GET",
    url: `${tmdbApiUrl}`,
    headers: {
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
      Accept: "application/json",
    },
  };

  try {
    const response = await axios(axiosConfig);
    return response?.data;
  } catch (error) {
    console.log(
      `Error: ${error.message}`,
      `Failed to fetch from TMBD external api!\n.\n.\n${error}`
    );
  }
};

module.exports = {
  callTmdbApi,
};
