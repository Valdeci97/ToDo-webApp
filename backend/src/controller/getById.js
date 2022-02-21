const taskModel = require('../model/taskModel');

const getById = async (req, res) => {
  try{
    const { id } = req.params;
    const result = await taskModel.find({ '_id': { '$in': id } });
    if (result.length === 0) {
      return res.status(404).send({ error: 'Tarefa não encontrada.' });
    }
    return res.status(200).send(...result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = getById;
