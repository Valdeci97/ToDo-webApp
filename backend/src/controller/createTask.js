const TaskModel = require('../model/taskModel');

const create = async (req, res) => {
  try {
    const { macaddress, type, title, description, when } = req.body;
    const task = new TaskModel({macaddress, type, title, description, when});
    const save = await task.save();
    return res.status(200).send(save);  
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = create;
