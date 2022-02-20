const taskModel = require('../model/taskModel');

const changeInfo = async (id, when, macaddress) => {
  const result = taskModel.findOne({
    '_id': { '$ne': id },
    'when': { '$eq': new Date(when) },
    'macaddress': { '$in': macaddress },
  });
  return result;
};

module.exports = changeInfo;
