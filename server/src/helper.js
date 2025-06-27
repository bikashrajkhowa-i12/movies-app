const { isEmpty } = require("lodash");

const buildQuery = (req) => {
  let query = {};

  if (!isEmpty(req?.params)) {
    query = req.params;
  } else if (!isEmpty(req?.query)) {
    query = req.query;
  }

  if (!isEmpty(req?.body)) {
    query = { ...query, ...req.body };
  }

  if (["", "all"].includes(query.type)) {
    delete query.type;
  }

  return query;
};


module.exports = {
    buildQuery
}