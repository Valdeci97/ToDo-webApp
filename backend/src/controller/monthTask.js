const { startOfMonth, endOfMonth } = require('date-fns');
const taskModel = require('../model/taskModel');

const month = async (req, res) => {
  try {
    const { macaddress } = req.body;
    const now = new Date();
    const result = await taskModel.find({
      'macaddress': { '$in': macaddress },
      'when': { '$gte': startOfMonth(now), '$lte': endOfMonth(now) },
    }).sort('when');
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = month;
