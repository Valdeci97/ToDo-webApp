const taskModel = require('../model/taskModel');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskModel.findByIdAndUpdate(
      { '_id': id },
      req.body,
      { new: true }
    );
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = update;
