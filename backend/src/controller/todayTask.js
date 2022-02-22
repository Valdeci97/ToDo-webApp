const { startOfDay, endOfDay } = require('date-fns');
const taskModel = require('../model/taskModel');

const today = async (req, res) => {
  try {
    const { macaddress } = req.params;
    const now = new Date();
    const result = await taskModel.find({
      'macaddress': { '$in': macaddress },
      'when': { '$gte': startOfDay(now), '$lte': endOfDay(now) },
    }).sort('when');
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = today;
