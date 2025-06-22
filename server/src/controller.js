const { fetchContentFromDb } = require("./service");
const { getReqData } = require("./helper");

const fetchContent = async (req, res) => {
  try {
    let reqData = getReqData(req);
    const data = await fetchContentFromDb(reqData);
    res.status(200).json(data);
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
