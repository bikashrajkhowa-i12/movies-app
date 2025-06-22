const Movie = require("./models/Movie");

const fetchContentFromDb = async (params={}) => {
  try {
    const query = ["", "all"].includes(params.type) ? {} : params;
    const result = await Movie.find(query);
    return result;
  } catch (error) {
    console.log("Error fetching from Database!\n", error);
    throw error;
  }
};

module.exports = {
  fetchContentFromDb,
};
