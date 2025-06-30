const {
  getAllContent,
  getContentById,
  fetchFromExternalApi,
} = require("./service");
const { buildQuery } = require("./helper");
const { isEmpty, get } = require("lodash");

const fetchContent = async (req, res) => {
  try {
    let query = buildQuery(req);
    const data = await getAllContent(query);
    res.status(200).json(data);
  } catch (er) {
    res.status(400).json({ error: er.message || "Something went wrong!" });
  }
};

const fetchById = async (req, res) => {
  try {
    let { id = null } = buildQuery(req);
    if (!id && !type) throw new Error("id and type fields are missing!");

    let data = await getContentById(id);

    if (!isEmpty(data)) {
      data = await fetchFromExternalApi(data);
      res.status(200).json(data);
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ error: error.message || "Something went wrong!" });
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
  fetchById,
  fetchByCriteria,
  myList,
  userProfile,
};
