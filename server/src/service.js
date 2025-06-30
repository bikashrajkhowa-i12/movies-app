const { Movie } = require("@bikashrajkhowa-i12/blackboxcore/models/mongo");
const { callTmdbApi } = require("./utils/externalApiUtillity");

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
    if(!id) throw new Error("id is missing!!");
    const result = await Movie.findOne({id}).lean();
    return result;
  } catch (error) {
    console.log("Error fetching from Database!\n", error);
    throw error;
  }
}

const fetchFromExternalApi = async (data) => {
  const { id = null, type = null } = data || {};
  try {
    if (!id && !type) throw new Error("id and type are mandatory!");
    const url = `/${type}/${id}`;
    const result = await callTmdbApi({ url });
    return { ...data, ...result };
  } catch (error) {
    console.log("Error: ", error?.message);
    console.log("Failed to fetch from TMDB external api!");
  }
};

module.exports = {
  getAllContent,
  getContentById,
  fetchFromExternalApi,
};
