const taskModel = require('../model/taskModel');

const done = async (req, res) => {
  try {
    const { id, done } = req.params;
    const result = await taskModel.findByIdAndUpdate(
      { '_id': id },
      { 'done': done },
      { new: true },
    );
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = done;
