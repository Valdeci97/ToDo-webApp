const taskModel = require('../model/taskModel');

const lateTask = async (req, res) => {
  try {
    const { macaddress } = req.body;
    const now = new Date();   
    const result = await taskModel.find({
      'when': { '$lt': now },
      'macaddress': { '$in': macaddress },
    }).sort('when');
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = lateTask;
