const taskModel = require('../model/taskModel');

const getAll = async (req, res) => {
  try {
    const { macaddress } = req.params;
    const result = await taskModel.find({ macaddress: { '$in': macaddress } }).sort('when');
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = getAll;