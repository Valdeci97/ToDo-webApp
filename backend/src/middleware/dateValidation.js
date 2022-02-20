const { isPast } = require('date-fns');
const isSameDate = require('../services/isSameDate');

const dateValidaton = async (req, res, next) => {
  const { macaddress, when } = req.body;
  if (isPast(new Date(when))) {
    return res.status(400).send({
      error: 'A data e hora informadas são inválidas! Escolha uma data futura.'
    });
  }
  const exists = await isSameDate(when, macaddress);
  if (exists) {
    return res.status(400)
      .send({ error: 'Já existe uma tarefa no dia e hora informados.' });
  }
  next();
};

module.exports = dateValidaton;
