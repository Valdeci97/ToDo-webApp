const taskModel = require('../model/taskModel');

const isSameDate = async (when, macaddress) => {
  const result = taskModel.findOne({
      'when': { '$eq': new Date(when) },
      'macaddress': { '$in': macaddress },
  });
  return result;
};

module.exports = isSameDate;
