const { isEmpty } = require("lodash");

const getReqData = (req) => {
    let query;

    if(!isEmpty(req?.params)) {
        query = req.params;
    } else if (!isEmpty(req?.query)) {
        query = req.query
    } else {
        query = {}
    }
    return query;
}

module.exports = {
    getReqData
}