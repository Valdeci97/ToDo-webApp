const taskValidation = (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body;
  if (!macaddress) {
    return res.status(400).send({ error: 'Macaddress é obrigatório.' });
  }
  if (!type) {
    return res.status(400).send({ error: 'Tipo é obrigatório.' });
  }
  if (!title) {
    return res.status(400).send({ error: 'Título é obrigatório.' });
  }
  if (!description) {
    return res.status(400).send({ error: 'Descrição é obrigatória.' });
  }
  if (!when) {
    return res.status(400).send({ error: 'Data e hora são obrigatórios.' });
  }
  next();
}

module.exports = taskValidation;
