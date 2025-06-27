const { mongo } = require("@bikashrajkhowa-i12/blackboxcore");

const fetchContentFromDb = async (query) => {
  try {
    const { Movie } = mongo || {};
    const result = await Movie.find(query).lean();
    return result;
  } catch (error) {
    console.log("Error fetching from Database!\n", error);
    throw error;
  }
};

module.exports = {
  fetchContentFromDb,
};
