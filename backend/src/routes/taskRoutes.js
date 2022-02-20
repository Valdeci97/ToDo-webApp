const express = require('express');
const create = require('../controller/createTask');
const update = require('../controller/updateTask');
const taskValidation = require('../middleware/taskValidation');
const dateValidation = require('../middleware/dateValidation');

const router = express.Router();

router.post('/',taskValidation, dateValidation, create);
router.put('/:id',dateValidation, update);

module.exports = router;
