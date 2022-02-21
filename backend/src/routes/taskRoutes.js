const express = require('express');

const create = require('../controller/createTask');
const update = require('../controller/updateTask');
const getAll = require('../controller/getAll');
const getById = require('../controller/getById');
const deletetask = require('../controller/delete');

const taskValidation = require('../middleware/taskValidation');
const dateValidation = require('../middleware/dateValidation');
const macValidation = require('../middleware/macaddressValidation');

const router = express.Router();

router.post('/',taskValidation, dateValidation, create);

router.put('/:id',dateValidation, update);

router.get('/:id', getById);

router.delete('/:id', deletetask);

router.get('/filter/all', macValidation, getAll);


module.exports = router;
