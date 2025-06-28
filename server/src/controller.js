const { fetchContentFromDb } = require("./service");
const { buildQuery } = require("./helper");

const fetchContent = async (req, res) => {
  try {
    let query = buildQuery(req);
    const data = await fetchContentFromDb(query);
    res.status(200).json(data);
  } catch (er) {
    res.status(400).json({ error: er.message || "Something went wrong!" });
  }
};

const fetchById = async (req, res) => {
  try {
    let query = buildQuery(req);
    const data = await fetchContentFromDb(query);
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(400).json({ error: error.message || "Something went wrong!"})
  }
}

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
  fetchById,
  fetchByCriteria,
  myList,
  userProfile,
};
