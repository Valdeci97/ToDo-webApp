const express = require('express');
const create = require('../controller/createTask');
const taskValidation = require('../middleware/taskValidation');
const dateValidation = require('../middleware/dateValidation');

const router = express.Router();

router.post('/',taskValidation, dateValidation, create);

module.exports = router;
