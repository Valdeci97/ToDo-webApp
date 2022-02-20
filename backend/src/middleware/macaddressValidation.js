const macValidation = (req, res, next) => {
  const { macaddress } = req.body;
  if (!macaddress) {
    return res.status(400).send({ error: 'Macaddress é obrigatório.' });
  }
  next();
};

module.exports = macValidation;
