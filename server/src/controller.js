const { fetchContentFromDb } = require("./service");

const fetchContent = async (req, res) => {
  try {
    const type = req?.params?.type || req?.query?.type ;
    const movies = await fetchContentFromDb({ type });
    res.status(200).json(movies);
  } catch (er) {
    res.status(400).json({ error: er.message || "Something went wrong!" });
  }
};

const fetchByCriteria = async (req, res) => {
  try {
  } catch (error) {}
};

const myList = async (req, res) => {
  try {
  } catch (error) {}
};

const userProfile = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  fetchContent,
  fetchByCriteria,
  myList,
  userProfile,
};
