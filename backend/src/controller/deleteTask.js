const taskModel = require('../model/taskModel');

const deletetask = async (req, res) => {
  try {
    const { id } = req.params;
    await taskModel.deleteOne({ '_id': id });
    return res.status(204).end();
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = deletetask;
